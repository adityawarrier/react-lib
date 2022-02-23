import { StringUtils } from "../../src/utils";

export const componentGenerator = {
  description: "Generate a new UI component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Enter name of the component",
    },
  ],
  actions: [
    {
      type: "add",
      path: "src/components/{{titleCase name}}/index.tsx",
      templateFile: "plop/templates/component/index.hbs",
    },
    {
      type: "add",
      path: "src/components/{{titleCase name}}/{{titleCase name}}.module.scss",
    },
    {
      type: "add",
      path: "src/components/{{titleCase name}}/{{titleCase name}}.stories.tsx",
      templateFile: "plop/templates/component/story.hbs",
    },
    {
      type: "modify",
      path: "src/components/index.ts",
      transform: (fileContent, { name }) => {
        return `${fileContent}export * from "./${StringUtils.toTitleCase(
          name
        )}";\n`;
      },
    },
  ],
};
