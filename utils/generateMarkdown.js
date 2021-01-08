// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

 # Licensed: ![Github License](https://img.shields.io/badge/license-${data.license}-blue.svg)


## Description

${data.description}

### Table of Contents

* Installation Details


## Installation Details

How to install: ${data.installation}

## Usage Details 

How to use: ${data.usage}
`;
}

module.exports = generateMarkdown;
