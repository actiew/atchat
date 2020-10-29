import { addDecorator } from "@storybook/react";
import React from "react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";

import theme from "theme";

export const parameters = {
   actions: {argTypesRegex: "^on[A-Z].*"},
};

addDecorator(withThemesProvider(theme));