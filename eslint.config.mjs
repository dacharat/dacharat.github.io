import { FlatCompat } from "@eslint/eslintrc";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

/**
 * ESLint flat config.
 *
 * We compose the project rules on top of the Next.js defaults
 * (`next/core-web-vitals` for app/runtime rules, `next/typescript`
 * for TypeScript-aware rules). Flat config is required by ESLint 9.
 */
const config = [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default config;
