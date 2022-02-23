import { StringUtils } from "../../src/utils";

export const utilGenerator = {
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

        return `${fileContent}export { ${StringUtils.toTitleCase(
          name
        )}Utils } from "./${StringUtils.toTitleCase(name)}";\n`;
      },
    },
  ],
};
