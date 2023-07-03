const markdownConverter = require("markdown-converter");
markdownConverter.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
})
function convertMarkdown(markdownText, markdownSyntax) {
    const lines = markdownText.split('\n');
    let htmlOutput = '';

    if (!markdownSyntax) {
        htmlOutput = markdownConverter(markdownText);
    }
    else {

        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
            let convertedLine = '';

            // Check if line starts with a known syntax pattern
            let foundSyntax = false;
            for (const syntax in markdownSyntax) {
                if (line.startsWith(syntax)) {
                    const args = line.slice(syntax.length).trim().split(' ');
                    const text = args[0];
                    const additionalArgs = args.slice(1);
                    convertedLine = markdownSyntax[syntax](text, ...additionalArgs);
                    foundSyntax = true;
                    break;
                }
            }

            // If no syntax match found, treat the line as a paragraph
            if (!foundSyntax) {
                convertedLine = markdownConverter(line);
            }

            htmlOutput += convertedLine;
        }
    }

    return htmlOutput;
}


module.exports = {
    convertMarkdown
}