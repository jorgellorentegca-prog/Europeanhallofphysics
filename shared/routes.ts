import { z } from 'zod';
import { insertDocumentSchema, documents } from './schema';

export { insertDocumentSchema, documents };

export const api = {
  documents: {
    list: {
      method: 'GET' as const,
      path: '/api/documents',
      responses: {
        200: z.array(z.custom<typeof documents.$inferSelect>()),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/documents/:id',
      responses: {
        200: z.custom<typeof documents.$inferSelect>(),
        404: z.object({ message: z.string() }),
      },
    },
    create: {
      method: 'POST' as const,
      path: '/api/documents',
      input: insertDocumentSchema,
      responses: {
        201: z.custom<typeof documents.$inferSelect>(),
        400: z.object({ message: z.string() }),
      },
    },
  },
};
