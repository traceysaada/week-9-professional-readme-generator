// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

# Licensed: ![Github License](https://img.shields.io/badge/license-${data.license}-blue.svg)


## Description

${data.description}

### Table of Contents

*Installation

## Installation Details

How to install: ${data.installation}

## Usage Details 

How to use: ${data.usage}

## Contributing 

How does this application Function: ${data.contributing}

## Test Details

How is this application used: ${data.test}

*Questions

## Contact details

Contact me via [Email](mailto:${data.email})

Github link: ${data.github}

## License

what License would you like to use: ${data.license}


*Additional Questions


`;
}

module.exports = generateMarkdown;
