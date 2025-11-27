"use client";

import {
  BarChart3,
  Zap,
  Users,
  ArrowRight,
  Database,
  Package,
  Crown,
  Layout,
  Palette,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Image3D } from "@/components/image-3d";

const mainFeatures = [
  {
    icon: Package,
    title: "Automated Time Tracking",
    description:
      "Easily log work hours with clock-in/clock-out functionality for all employees.",
  },
  {
    icon: Crown,
    title: "Smart Leave Management",
    description:
      "Manage PTO, sick leave, and custom leave types with automated approval workflows.",
  },
  {
    icon: Layout,
    title: "Shift Scheduling Made Simple",
    description:
      "Create and manage shifts for multiple teams with ease and reduce scheduling conflicts.",
  },
  {
    icon: Zap,
    title: "Real-Time Notifications",
    description:
      "Keep managers and employees updated with alerts for shifts, approvals, and attendance.",
  },
];

const secondaryFeatures = [
  {
    icon: BarChart3,
    title: "Attendance Reports & Analytics",
    description:
      "Generate detailed timesheet and attendance reports for better HR insights.",
  },
  {
    icon: Palette,
    title: "Multi-Team & Multi-Location Support",
    description:
      "Manage employees across teams, departments, and office locations effortlessly.",
  },
  {
    icon: Users,
    title: "Remote & Hybrid Friendly",
    description:
      "Track hours and leave for on-site, remote, and hybrid employees with full visibility.",
  },
  {
    icon: Database,
    title: "Easy Integrations",
    description:
      "Seamlessly connect with payroll, HR software, and other essential business tools.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 sm:py-32 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">
            timetrakd Features
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Everything you need to manage time, leave, and attendance
          </h2>
          <p className="text-lg text-muted-foreground">
            We simplify team management workflows with automated timesheets,
            smart leave tracking, shift scheduling, clock-in/out functionality,
            and detailed reporting for managers and teams.
          </p>
        </div>

        {/* First Feature Section */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16 mb-24">
          {/* Left Image */}
          <Image3D
            lightSrc="/feature-1-light.png"
            darkSrc="/feature-1-dark.png"
            alt="Analytics dashboard"
            direction="left"
          />
          {/* Right Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                Components that accelerate development
              </h3>
              <p className="text-muted-foreground text-base text-pretty">
                Our curated marketplace offers premium blocks and templates
                designed to save time and ensure consistency across your admin
                projects.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {mainFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="group hover:bg-accent/5 flex items-start gap-3 p-2 rounded-lg transition-colors"
                >
                  <div className="mt-0.5 flex shrink-0 items-center justify-center">
                    <feature.icon
                      className="size-5 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mt-1 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pe-4 pt-2">
              <Button size="lg" className="cursor-pointer">
                <a
                  href="https://shadcnstore.com/templates"
                  className="flex items-center"
                >
                  Browse Templates
                  <ArrowRight className="ms-2 size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="cursor-pointer">
                <a href="https://shadcnstore.com/blocks">View Components</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Second Feature Section - Flipped Layout */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16">
          {/* Left Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                Streamlined HR Workflows
              </h3>
              <p className="text-muted-foreground text-base text-pretty">
                Every feature in timetrakd is built for efficiency — from shift
                scheduling and attendance tracking to detailed reporting and
                multi-team support, ensuring smooth HR operations.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {secondaryFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="group hover:bg-accent/5 flex items-start gap-3 p-2 rounded-lg transition-colors"
                >
                  <div className="mt-0.5 flex shrink-0 items-center justify-center">
                    <feature.icon
                      className="size-5 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mt-1 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pe-4 pt-2">
              <Button size="lg" className="cursor-pointer">
                <a href="#" className="flex items-center">
                  View Documentation
                  <ArrowRight className="ms-2 size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="cursor-pointer">
                <a
                  href="https://github.com/silicondeck/shadcn-dashboard-landing-template"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </a>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <Image3D
            lightSrc="/feature-2-light.png"
            darkSrc="/feature-2-dark.png"
            alt="Performance dashboard"
            direction="right"
            className="order-1 lg:order-2"
          />
        </div>
      </div>
    </section>
  );
}
