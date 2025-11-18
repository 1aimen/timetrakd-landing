"use client";

import { LandingNavbar } from "./components/navbar";
import { HeroSection } from "./components/hero-section";
import { LogoCarousel } from "./components/logo-carousel";
import { FeaturesSection } from "./components/features-section";
import { ContactSection } from "./components/contact-section";
import { LandingFooter } from "./components/footer";
import InfoSection from "./components/info-section";
import Faqs3 from "./components/faq";
import { ResourceAllocation } from "./components/resource-allocation";
import { PricingSection } from "./components/pricing-section";

export function PricingPageContent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <LandingNavbar />

      {/* Main Content */}
      <main>
        <PricingSection />
        <Faqs3 />
        <ContactSection />
      </main>

      {/* Footer */}
      <LandingFooter />
    </div>
  );
}
