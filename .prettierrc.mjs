/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions & import('@trivago/prettier-plugin-sort-imports').PluginConfig} */
export default {
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  semi: true,
  tailwindFunctions: ["cn", "cva"],
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "^@components/(.*)$",
    "^@libs/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  tabWidth: 2,
};
