const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  // GENERATORS
  plop.setGenerator("component", {
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
          return `${fileContent}export * from "./${toTitleCase(name)}";\n`;
        },
      },
    ],
  });
  plop.setGenerator("util", {
    description: "Generate a new Util",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Enter name of the Util",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/utils/{{titleCase name}}.ts",
        templateFile: "plop/templates/util/index.hbs",
      },
      {
        type: "modify",
        path: "src/utils/index.ts",
        transform: (fileContent, { name }) => {
          console.log(fileContent.slice(-1));

          return `${fileContent}export { ${toTitleCase(
            name
          )}Utils } from "./${toTitleCase(name)}";\n`;
        },
      },
    ],
  });

  // HELPERS
  plop.setHelper("titleCase", toTitleCase);
}
