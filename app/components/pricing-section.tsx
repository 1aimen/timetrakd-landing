"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useState } from "react";

const plans = [
  {
    name: "Core",
    description:
      "Ideal for small teams needing essential time tracking features.",
    monthlyPrice: 17.5,
    yearlyPrice: 210,
    features: [
      "Base platform fee included",
      "Hosting, maintenance & support",
      "Regular updates included",
      "iOS & Android mobile apps",
      "Employee Time Tracking module (€4.40/user optional)",
      "Project Time Tracking module (€8.40/user optional)",
      "Leave Management module (€2.80/user optional)",
    ],
    cta: "Start with Core",
    popular: false,
  },
  {
    name: "Business",
    description:
      "Best for teams that want full workforce tracking and automation.",
    monthlyPrice: 17.5, // base fee still applies
    yearlyPrice: 210,
    features: [
      "Everything in Core",
      "Add employee modules per user:",
      "• Employee Time Tracking (€4.40/user)",
      "• Project Time Tracking (€8.40/user)",
      "• Leave Management (€2.80/user)",
      "Multiuser Android Time Clock (€10/month)",
      "Multiuser Web Time Clock (€10/month)",
      "Access to all virtual time clocks",
      "Free mobile apps",
    ],
    popular: true,
    cta: "Most Popular",
    includesPrevious: "All Core features, plus",
  },
  {
    name: "Enterprise",
    description:
      "For companies needing hardware terminals, onboarding, and integrations.",
    monthlyPrice: 17.5, // base fee
    yearlyPrice: 210,
    features: [
      "Everything in Business",
      "Hardware Time Clocks:",
      "• Evo Basic — from €29.90/month",
      "• Evo Smart — from €34.90/month",
      "• Evo Advanced — from €49.90/month",
      "Dedicated onboarding service (pricing on request)",
      "On-site or remote training (pricing on request)",
      "API & integration support",
      "Custom setups and workflows",
    ],
    cta: "Contact Sales",
    popular: false,
    includesPrevious: "All Business features, plus",
  },
];

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Pricing Plans
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Choose your plan
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start building with our free components or upgrade to Pro for access
            to premium templates and advanced features.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-2">
            <ToggleGroup
              type="single"
              value={isYearly ? "yearly" : "monthly"}
              onValueChange={(value) => setIsYearly(value === "yearly")}
              className="bg-secondary text-secondary-foreground border-none rounded-full p-1 cursor-pointer shadow-none"
            >
              <ToggleGroupItem
                value="monthly"
                className="data-[state=on]:bg-background data-[state=on]:border-border border-transparent border px-6 !rounded-full data-[state=on]:text-foreground hover:bg-transparent cursor-pointer transition-colors"
              >
                Monthly
              </ToggleGroupItem>
              <ToggleGroupItem
                value="yearly"
                className="data-[state=on]:bg-background data-[state=on]:border-border border-transparent border px-6 !rounded-full data-[state=on]:text-foreground hover:bg-transparent cursor-pointer transition-colors"
              >
                Annually
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <p className="text-sm text-muted-foreground">
            <span className="text-primary font-semibold">Save 20%</span> On
            Annual Billing
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto max-w-6xl">
          <div className="rounded-xl border">
            <div className="grid lg:grid-cols-3">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`p-8 grid grid-rows-subgrid row-span-4 gap-6 ${
                    plan.popular
                      ? "my-2 mx-4 rounded-xl bg-card border-transparent shadow-xl ring-1 ring-foreground/10 backdrop-blur"
                      : ""
                  }`}
                >
                  {/* Plan Header */}
                  <div>
                    <div className="text-lg font-medium tracking-tight mb-2">
                      {plan.name}
                    </div>
                    <div className="text-muted-foreground text-balance text-sm">
                      {plan.description}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div>
                    <div className="text-4xl font-bold mb-1">
                      {plan.name === "Lifetime"
                        ? `$${plan.monthlyPrice}`
                        : plan.name === "Free"
                        ? "$0"
                        : `$${isYearly ? plan.yearlyPrice : plan.monthlyPrice}`}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {plan.name === "Lifetime"
                        ? "One-time payment"
                        : "Per month"}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div>
                    <Button
                      className={`w-full cursor-pointer my-2 ${
                        plan.popular
                          ? "shadow-md border-[0.5px] border-white/25 shadow-black/20 bg-primary ring-1 ring-primary/15 text-primary-foreground hover:bg-primary/90"
                          : "shadow-sm shadow-black/15 border border-transparent bg-background ring-1 ring-foreground/10 hover:bg-muted/50"
                      }`}
                      variant={plan.popular ? "default" : "secondary"}
                    >
                      {plan.cta}
                    </Button>
                  </div>

                  {/* Features */}
                  <div>
                    <ul role="list" className="space-y-3 text-sm">
                      {plan.includesPrevious && (
                        <li className="flex items-center gap-3 font-medium">
                          {plan.includesPrevious}:
                        </li>
                      )}
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-3"
                        >
                          <Check
                            className="text-primary size-4 shrink-0"
                            strokeWidth={2.5}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enterprise Note */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Need custom components or have questions?{" "}
            <Button
              variant="link"
              className="p-0 h-auto cursor-pointer"
              asChild
            >
              <a href="#contact">Contact our team</a>
            </Button>
          </p>
        </div>
      </div>
    </section>
  );
}
