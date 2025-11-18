"use client";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from "@/components/accordion";
import { TimelineContent } from "@/components/timeline-animation";
import { Button } from "@/components/ui/button";
import VerticalCutReveal from "@/components/vertical-cut-reveal";

import { Play } from "lucide-react";
import { useRef } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "How secure is my team's data in timetrakd?",
    answer:
      "timetrakd uses enterprise-grade encryption, role-based access control, and regular backups to ensure your HR data stays safe and confidential.",
  },
  {
    question:
      "Can timetrakd integrate with our existing payroll or HR systems?",
    answer:
      "Absolutely! timetrakd offers seamless integration with payroll systems, HR software, and other third-party tools to streamline your workflows.",
  },
  {
    question: "Does timetrakd automate leave requests and approvals?",
    answer:
      "Yes! Our smart leave management system automates leave requests, approvals, and notifications, reducing HR workload and human error.",
  },
  {
    question: "Can I generate reports for attendance and productivity?",
    answer:
      "timetrakd provides real-time dashboards and detailed reports on attendance, timesheets, and productivity metrics to help you make informed decisions.",
  },
  {
    question: "Is there support and training available for new users?",
    answer:
      "Definitely! We offer full documentation, onboarding guides, and dedicated support to ensure your team can use timetrakd efficiently from day one.",
  },
  {
    question: "Can timetrakd handle multiple teams and locations?",
    answer:
      "Yes! timetrakd allows you to manage multiple teams, departments, and office locations with flexible scheduling and centralized time tracking.",
  },
  {
    question: "Does timetrakd support remote and hybrid employees?",
    answer:
      "Absolutely. timetrakd tracks attendance, hours, and leaves for on-site, remote, and hybrid employees, giving HR a complete overview.",
  },
  {
    question: "Can I customize leave types and approval workflows?",
    answer:
      "Yes! timetrakd lets you define custom leave types, approval hierarchies, and policies to match your company’s HR processes.",
  },
  {
    question: "Can employees clock in and out using timetrakd?",
    answer:
      "Yes! timetrakd includes simple clock-in and clock-out functionality, making attendance tracking effortless for your team.",
  },
  {
    question: "Is timetrakd mobile-friendly for clocking in remotely?",
    answer:
      "Absolutely. Employees can clock in and out from their phones or tablets, whether they’re working on-site, remotely, or in the field.",
  },
  {
    question: "Does timetrakd prevent time fraud or incorrect entries?",
    answer:
      "Yes! in clock-in mode timetrakd includes safeguards like GPS verification, and device restrictions to ensure clock-ins and clock-outs are accurate and trustworthy.",
  },
];

export default function Faqs3() {
  const faqsRef = useRef<HTMLDivElement>(null);
  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  return (
    <div
      className="sm:p-10 p-5 mx-auto w-full max-w-7xl  grid md:grid-cols-2 gap-5"
      ref={faqsRef}
    >
      <div className="flex flex-col justify-between">
        <div>
          <TimelineContent
            as="span"
            animationNum={0}
            timelineRef={faqsRef}
            customVariants={revealVariants}
            className="text-sm  border p-1 px-2 bg-primary text-primary-foreground rounded-md font-normal"
          >
            FAQ
          </TimelineContent>
          <h1 className="lg:text-6xl md:text-5xl text-4xl text-black pt-4">
            <VerticalCutReveal
              splitBy="words"
              staggerDuration={0.15}
              staggerFrom="first"
              reverse={true}
              containerClassName="justify-start"
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 40,
                delay: 0.4,
              }}
            >
              Frequently asked questions
            </VerticalCutReveal>
          </h1>
        </div>

        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={faqsRef}
          customVariants={revealVariants}
          className="border border-neutral-200 p-4 rounded-lg bg-gradient-to-t text-white from-primary/20 to-primary md:block hidden"
        >
          <h2 className="text-2xl text-primary-foreground font-semibold">
            Still have questions?
          </h2>
          <p className="text-sm text-popover-foreground py-2">
            Can&apos;t find the answer to your question? Send us an email and
            we&apos;ll get back to you as soon as possible!
          </p>
          <Button className="active:shadow-none text-primary-foreground bg-gradient-to-t from-primary/80 to-primary/90 shadow-lg shadow-blue-600 p-2 px-3 mt-5 rounded-md">
            Contact us
          </Button>
        </TimelineContent>
      </div>
      <div>
        <div className="mt-3">
          <Accordion defaultValue="item-2">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="mb-0 bg-gray-100 border p-4 rounded-xl border-gray-200 w-full py-2 mt-4"
              >
                <TimelineContent
                  as="div"
                  animationNum={2 + index}
                  timelineRef={faqsRef}
                  customVariants={revealVariants}
                >
                  <AccordionHeader
                    customIcon
                    className="hover:no-underline p-0  py-2 relative data-[active]:bg-transparent hover:bg-transparent text-black  sm:text-base text-sm"
                  >
                    <span className="font-medium lg:text-lg">
                      {item.question}
                    </span>
                    <span className="relative bg-white p-3 -translate-x-1 rounded-xl border border-neutral-200">
                      <Play className="w-5 h-5 fill-primary text-primary group-data-[active]:rotate-90 -rotate-90 transition-all duration-300" />
                    </span>
                  </AccordionHeader>
                </TimelineContent>
                <TimelineContent
                  as="div"
                  animationNum={2 + index}
                  timelineRef={faqsRef}
                  customVariants={revealVariants}
                >
                  <AccordionPanel
                    className="space-y-4 w-full mx-auto bg-neutral-100 px-0"
                    articleClassName="pt-2 px-0 bg-neutral-100"
                  >
                    <p className="text-sm lg:text-base text-neutral-700">
                      {item.answer}
                    </p>
                  </AccordionPanel>
                </TimelineContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={faqsRef}
          customVariants={revealVariants}
          className="border border-neutral-200 p-4 rounded-lg bg-gradient-to-t text-white from-blue-50 to-blue-700 md:hidden block mt-10"
        >
          <h2 className="text-2xl font-semibold">Still have questions?</h2>
          <p className="text-sm py-2">
            Can&apos;t find the answer to your question? Send us an email and
            we&apos;ll get back to you as soon as possible!
          </p>
          <button className="active:shadow-none bg-gradient-to-t from-blue-500 to-blue-600 shadow-lg shadow-blue-600 text-white p-2 px-3 mt-5 rounded-md">
            Send email
          </button>
        </TimelineContent>
      </div>
    </div>
  );
}
