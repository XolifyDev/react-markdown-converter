# react-markdown-converter

[![npm version](https://img.shields.io/npm/v/react-markdown-converter.svg)](https://www.npmjs.com/package/react-markdown-converter)

**react-markdown-converter** is a lightweight package that allows you to convert Markdown text to HTML. It provides a simple and customizable solution for rendering Markdown content in your JavaScript projects.

## Installation

You can install the **react-markdown-converter** package via npm. Make sure you have Node.js and npm installed on your machine.

```bash
npm install react-markdown-converter
```

## Usage

To use the **react-markdown-converter** package, you can import the `convertMarkdown` function and call it with your Markdown text.

```javascript
const { convertMarkdown } = require('react-markdown-converter');

const markdownText = '# Hello, *Markdown*!';
const htmlOutput = convertMarkdown(markdownText);

console.log(htmlOutput);
```

The `convertMarkdown` function takes a Markdown string as input and returns the corresponding HTML output. You can then use the HTML output in your applications as needed.

## Customization

The **react-markdown-converter** package provides a default set of conversions for common Markdown syntax, such as headings, bold, italic, and links. However, you can also customize the conversion rules to fit your specific requirements.

To customize the conversion, you can pass an optional `markdownSyntax` object to the `convertMarkdown` function. This object should contain the mappings for your desired syntax conversions.

```javascript
const { convertMarkdown } = require('react-markdown-converter');

const myMarkdownSyntax = {
  '[text](text-color)': (text, color) => `<span style="color: ${color}">${text}</span>`,
  '(link)[text]': (link, text) => `<a href="${link}">${text}</a>`,
};

const markdownText = 'Hello, [world](red)! (https://example.com)[Click here]!';
const htmlOutput = convertMarkdown(markdownText, myMarkdownSyntax);

console.log(htmlOutput);
```

In the example above, the `myMarkdownSyntax` object contains two custom syntax mappings. The first one `'[text](text-color)'` maps to a function that converts the matched pattern to a `<span>` element with a specified text color. The second mapping `'(link)[text]'` converts the pattern to an HTML `<a>` element.

## Contributing

Contributions to **react-markdown-converter** are welcome! If you find any issues or have suggestions for improvements, please open an issue on the [GitHub repository](https://github.com/your-username/react-markdown-converter). You can also submit pull requests with proposed changes.

## License

This project is licensed under the [MIT License](LICENSE).