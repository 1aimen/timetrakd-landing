"use client";

import { LandingNavbar } from "./components/navbar";
import { ContactSection } from "./components/contact-section";
import { LandingFooter } from "./components/footer";
import { PricingSection } from "./components/pricing-section";
import { FaqSection } from "./components/faq-section";

export function PricingPageContent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <LandingNavbar />

      {/* Main Content */}
      <main>
        <PricingSection />
        <FaqSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <LandingFooter />
    </div>
  );
}
