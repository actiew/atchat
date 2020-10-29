module.exports = {
   "[html]": {"editor.defaultFormatter": "esbenp.prettier-vscode"},
   "[css]": {"editor.defaultFormatter": "esbenp.prettier-vscode"},
   "[javascript]": {"editor.defaultFormatter": "esbenp.prettier-vscode"},
   printWidth: 96,
   trailingComma: "none",
   jsxBracketSameLine: true,
   tabWidth: 3, // 缩进字节数
   useTabs: true, // 缩进不使用tab，使用空格
   semi: true, // 句尾添加分号
   singleQuote: false, // 使用单引号代替双引号
   proseWrap: "preserve", // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
   arrowParens: "avoid", //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
   bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
   endOfLine: "auto", // 结尾是 \n \r \n\r auto
   eslintIntegration: false, //不让prettier使用eslint的代码格式进行校验
   "prettier.htmlWhitespaceSensitivity": "ignore",
   "prettier.ignorePath": ".prettierignore", // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
   jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
   //parser: 'babylon', // 格式化的解析器，默认是babylon
   //requireConfig: false, // Require a 'prettierconfig' to format prettier
   //stylelintIntegration: false, //不让prettier使用stylelint的代码格式进行校验
   //trailingComma: 'es5', // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
   //tslintIntegration: false, // 不让prettier使用tslint的代码格式进行校验
};