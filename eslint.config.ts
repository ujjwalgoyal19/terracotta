import sheriff from "eslint-config-sheriff";
import { defineFlatConfig } from "eslint-define-config";
import type { SheriffSettings } from "@sherifforg/types";

const sheriffOptions: SheriffSettings = {
  files: ["./src/**/*"],
  react: true,
  lodash: false,
  next: true,
  playwright: false,
  jest: false,
  vitest: false,
};

export default defineFlatConfig([...sheriff(sheriffOptions)]);
