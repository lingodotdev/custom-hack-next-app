"use client";
import { components } from "@/lib/tambo/tambo";
import { TamboProvider } from "@tambo-ai/react";
import { MessageThreadFull } from "./message-thread-full";
import "./tambo-styles.css";

export default function Container() {
  return (
    <div className="w-full">
      <TamboProvider
        apiKey={process.env.NEXT_PUBLIC_TAMBO_API_KEY!}
        components={components}
      >
        <div className="p-4 tambo-theme">
          <MessageThreadFull />
        </div>
      </TamboProvider>
    </div>
  );
}
