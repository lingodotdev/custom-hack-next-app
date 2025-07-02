"use client";

import Link from "next/link";
import Section from "../common/section";

export default function Tambo() {
  return (
    <Section title={<span data-lingo-skip>Tambo</span>}>
      <div className="flex flex-row items-center gap-4">
        Build conversational interfaces
        <Link
          href="/tambo"
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors inline-block"
        >
          Chat
        </Link>
      </div>
    </Section>
  );
}
