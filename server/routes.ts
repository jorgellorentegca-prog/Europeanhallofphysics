import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.documents.list.path, async (req, res) => {
    const docs = await storage.getDocuments();
    res.json(docs);
  });

  app.get(api.documents.get.path, async (req, res) => {
    const doc = await storage.getDocument(Number(req.params.id));
    if (!doc) {
      return res.status(404).json({ message: "Document not found" });
    }
    res.json(doc);
  });

  app.post(api.documents.create.path, async (req, res) => {
    try {
      const input = api.documents.create.input.parse(req.body);
      const doc = await storage.createDocument(input);
      res.status(201).json(doc);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: err.errors[0].message });
      }
      throw err;
    }
  });

  // Seed data
  const existingDocs = await storage.getDocuments();
  if (existingDocs.length === 0) {
    await storage.createDocument({
      title: "Lagrangian Mechanics: Advanced Dynamics",
      description: "A comprehensive analysis of classical mechanics using the Lagrangian formalism.",
      type: "paper",
      institution: "University of Oxford",
      country: "United Kingdom",
      fileUrl: "/documents/mechanics.pdf"
    });
    await storage.createDocument({
      title: "Quantum Entanglement Verification",
      description: "Experimental results confirming Bell's inequality violations.",
      type: "paper",
      institution: "University of Vienna",
      country: "Austria",
      fileUrl: "/documents/quantum.pdf"
    });
    await storage.createDocument({
      title: "Thermodynamics Problem Set 1",
      description: "Introductory exercises on entropy and heat transfer.",
      type: "exercise",
      institution: "ETH Zurich",
      country: "Switzerland",
      fileUrl: "/documents/thermo1.pdf"
    });
    await storage.createDocument({
      title: "Electromagnetism: Maxwell's Equations",
      description: "Fundamental derivation of Maxwell's equations.",
      type: "paper",
      institution: "Ecole Polytechnique",
      country: "France",
      fileUrl: "/documents/electromagnetism.pdf"
    });
  }

  return httpServer;
}
