import * as fs from "fs";
import { Configuration, Linter } from "tslint";

export const lint = (path, fileName) => {
  const filePath = path + fileName;
  const fileContent = fs.readFileSync(filePath, "utf8");
  const linter = new Linter({ fix: false });
  const configuration = Configuration.findConfiguration(`${path}tslint.json`, filePath).results;

  linter.lint(filePath, fileContent, configuration);
  return linter.getResult();
};

export const noAsyncActions = {
  "defaultSeverity": "error",
  "jsRules": {},
  "rules": {
    "mobx-react-no-async-action": true
  },
  "rulesDirectory": "src/rules"
};

export const noUnusedInjectConfig = {
  "defaultSeverity": "error",
  "jsRules": {},
  "rules": {
    "mobx-react-no-unused-inject": true
  },
  "rulesDirectory": "src/rules"
};

export const noEmptyInjectConfig = {
  "defaultSeverity": "error",
  "jsRules": {},
  "rules": {
    "mobx-react-no-empty-inject": true
  },
  "rulesDirectory": "src/rules"
};

export const noInjectDecoratorsConfig = {
  "defaultSeverity": "error",
  "jsRules": {},
  "rules": {
    "mobx-react-no-inject-decorators": true
  },
  "rulesDirectory": "src/rules"
};

export const lintFileString = (file, config) => {
  const linter = new Linter({ fix: false });
  const configuration = Configuration.parseConfigFile(config);

  linter.lint('', file, configuration);
  return linter.getResult();
};

