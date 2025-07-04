import type { NextConfig } from "next";
import lingoCompiler from "lingo.dev/compiler";

const nextConfig: NextConfig = {
  /* config options here */
};

// for Lingo.dev Compiler configuration see https://lingo.dev/en/compiler/frameworks/nextjs
export default lingoCompiler.next({
  sourceLocale: "en",
  targetLocales: ["es", "fr", "de"],
  models: "lingo.dev",
})(nextConfig);
