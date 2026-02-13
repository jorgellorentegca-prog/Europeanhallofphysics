export function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
            Legal Documentation
          </p>
          <h1 
            className="mb-4 tracking-tight" 
            style={{ 
              fontSize: "2.5rem", 
              fontWeight: 300,
              letterSpacing: "-0.01em"
            }}
          >
            Terms of Service
          </h1>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Last updated: January 15, 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <section>
            <h2 className="mb-4 text-xl tracking-tight" style={{ fontWeight: 300 }}>
              1. Acceptance of Terms
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Welcome to the European Hall of Physics ("EHOP", "we", "us", or "our"). By accessing 
                or using our website and repository platform (the "Service"), you agree to be bound by 
                these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use 
                the Service.
              </p>
              <p>
                These Terms constitute a legally binding agreement between you and EHOP. We reserve the 
                right to modify these Terms at any time, and your continued use of the Service constitutes 
                acceptance of any changes.
              </p>
            </div>
          </section>

          {/* Account Registration */}
          <section className="border-t border-border/50 pt-8">
            <h2 className="mb-4 text-xl tracking-tight" style={{ fontWeight: 300 }}>
              2. Account Registration and Eligibility
            </h2>
            <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                  2.1 Eligibility
                </p>
                <p>
                  The Service is intended for researchers, academics, students, and professionals in the 
                  field of physics. You must be at least 18 years old or have reached the age of majority 
                  in your jurisdiction to use this Service.
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                  2.2 Account Responsibility
                </p>
                <p>
                  You are responsible for maintaining the confidentiality of your account credentials and 
                  for all activities that occur under your account. You agree to notify us immediately of 
                  any unauthorized use of your account.
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                  2.3 Accurate Information
                </p>
                <p>
                  You agree to provide accurate, current, and complete information during registration 
                  and to update such information to keep it accurate, current, and complete.
                </p>
              </div>
            </div>
          </section>

          {/* Repository Usage */}
          <section className="border-t border-border/50 pt-8">
            <h2 className="mb-4 text-xl tracking-tight" style={{ fontWeight: 300 }}>
              3. Repository Usage and Content Submission
            </h2>
            <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                  3.1 Content Ownership
                </p>
                <p>
                  You retain all ownership rights to content you submit to the repository. By uploading 
                  content, you grant EHOP a worldwide, non-exclusive, royalty-free license to host, store, 
                  reproduce, and distribute your content for the purposes of operating the repository.
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                  3.2 Content Responsibility
                </p>
                <p>
                  You are solely responsible for the content you upload. You represent and warrant that:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>You have the right to submit the content</li>
                  <li>The content does not infringe on any third-party rights</li>
                  <li>The content is accurate and not misleading</li>
                  <li>The content complies with all applicable laws and regulations</li>
                </ul>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                  3.3 Academic Integrity
                </p>
                <p>
                  All submitted content must adhere to academic integrity standards. Plagiarism, 
                  fabrication of data, or any form of academic misconduct is strictly prohibited and 
                  may result in immediate account termination.
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                  3.4 Public Accessibility
                </p>
                <p>
                  Content uploaded to the repository is made publicly accessible. Do not upload 
                  confidential, proprietary, or sensitive information that you do not wish to be 
                  publicly available.
                </p>
              </div>
            </div>
          </section>

          {/* Prohibited Uses */}
          <section className="border-t border-border/50 pt-8">
            <h2 className="mb-4 text-xl tracking-tight" style={{ fontWeight: 300 }}>
              4. Prohibited Uses
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>You agree not to use the Service to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon intellectual property rights of others</li>
                <li>Upload malicious code, viruses, or harmful software</li>
                <li>Attempt to gain unauthorized access to any part of the Service</li>
                <li>Engage in any automated data collection without prior written consent</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Submit false, misleading, or fraudulent content</li>
                <li>Use the Service for commercial purposes without authorization</li>
              </ul>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="border-t border-border/50 pt-8">
            <h2 className="mb-4 text-xl tracking-tight" style={{ fontWeight: 300 }}>
              5. Intellectual Property Rights
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                The Service and its original content (excluding user-submitted content), features, and 
                functionality are owned by EHOP and its licensors and are protected by international 
                copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p>
                Our trademarks and trade dress may not be used in connection with any product or service 
                without the prior written consent of EHOP.
              </p>
            </div>
          </section>

          {/* Content Moderation */}
          <section className="border-t border-border/50 pt-8">
            <h2 className="mb-4 text-xl tracking-tight" style={{ fontWeight: 300 }}>
              6. Content Moderation and Removal
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                We reserve the right, but are not obligated, to monitor, review, and remove content that 
                violates these Terms or is otherwise objectionable. We may remove content or terminate 
                accounts at our sole discretion, with or without notice.
              </p>
              <p>
                If you believe content infringes your rights, please contact us at{" "}
                <a href="mailto:legal@ehop.eu" className="text-[#4A90E2] hover:underline">
                  legal@ehop.eu
                </a>
              </p>
            </div>
          </section>

          {/* Disclaimer of Warranties */}
          <section className="border-t border-border/50 pt-8">
            <h2 className="mb-4 text-xl tracking-tight" style={{ fontWeight: 300 }}>
              7. Disclaimer of Warranties
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
                WHETHER EXPRESS OR IMPLIED. EHOP DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED 
                TO MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p>
                We do not warrant that the Service will be uninterrupted, secure, or error-free, or 
                that defects will be corrected. We do not warrant the accuracy or reliability of 
                user-submitted content.
              </p>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="border-t border-border/50 pt-8">
            <h2 className="mb-4 text-xl tracking-tight" style={{ fontWeight: 300 }}>
              8. Limitation of Liability
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, EHOP SHALL NOT BE LIABLE FOR ANY INDIRECT, 
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR 
                REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, 
                OR OTHER INTANGIBLE LOSSES.
              </p>
            </div>
          </section>

          {/* Indemnification */}
          <section className="border-t border-border/50 pt-8">
            <h2 className="mb-4 text-xl tracking-tight" style={{ fontWeight: 300 }}>
              9. Indemnification
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                You agree to indemnify, defend, and hold harmless EHOP and its affiliates, officers, 
                directors, employees, and agents from any claims, damages, obligations, losses, 
                liabilities, costs, or expenses arising from:
              </p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Your use of the Service</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Content you submit to the repository</li>
              </ul>
            </div>
          </section>

          {/* Governing Law */}
          <section className="border-t border-border/50 pt-8">
            <h2 className="mb-4 text-xl tracking-tight" style={{ fontWeight: 300 }}>
              10. Governing Law and Jurisdiction
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of Switzerland, 
                without regard to its conflict of law provisions. Any disputes arising from these Terms 
                shall be subject to the exclusive jurisdiction of the courts of Geneva, Switzerland.
              </p>
            </div>
          </section>

          {/* Termination */}
          <section className="border-t border-border/50 pt-8">
            <h2 className="mb-4 text-xl tracking-tight" style={{ fontWeight: 300 }}>
              11. Termination
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                We may terminate or suspend your account and access to the Service immediately, without 
                prior notice or liability, for any reason, including if you breach these Terms. Upon 
                termination, your right to use the Service will immediately cease.
              </p>
              <p>
                You may terminate your account at any time by contacting us at{" "}
                <a href="mailto:contact@ehop.eu" className="text-[#4A90E2] hover:underline">
                  contact@ehop.eu
                </a>
              </p>
            </div>
          </section>

          {/* Severability */}
          <section className="border-t border-border/50 pt-8">
            <h2 className="mb-4 text-xl tracking-tight" style={{ fontWeight: 300 }}>
              12. Severability
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                If any provision of these Terms is held to be unenforceable or invalid, such provision 
                will be changed and interpreted to accomplish the objectives of such provision to the 
                greatest extent possible under applicable law, and the remaining provisions will continue 
                in full force and effect.
              </p>
            </div>
          </section>

          {/* Entire Agreement */}
          <section className="border-t border-border/50 pt-8">
            <h2 className="mb-4 text-xl tracking-tight" style={{ fontWeight: 300 }}>
              13. Entire Agreement
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                These Terms constitute the entire agreement between you and EHOP regarding the Service 
                and supersede all prior agreements and understandings, whether written or oral, regarding 
                the Service.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="border-t border-border/50 pt-8">
            <h2 className="mb-4 text-xl tracking-tight" style={{ fontWeight: 300 }}>
              14. Contact Information
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="mt-4 p-6 bg-card border border-border/50">
                <p>Email: <a href="mailto:legal@ehop.eu" className="text-[#4A90E2] hover:underline">legal@ehop.eu</a></p>
                <p className="mt-2">Address: European Hall of Physics, Route de Meyrin, CH-1211 Geneva 23, Switzerland</p>
                <p className="mt-2">Phone: <a href="tel:+41227678484" className="text-[#4A90E2] hover:underline">+41 22 767 84 84</a></p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
