// function to generate markdown for README
function generateMarkdown(answers) {
  const licenseBadge = answers.license ? `![License](https://img.shields.io/badge/license-${encodeURIComponent(answers.license)}-blue.svg)` : '';

  return `
  ${licenseBadge}
# ${answers.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This application is covered under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
If you have any questions or need further assistance, please feel free to reach out to me on [GitHub](https://github.com/${answers.github}) or via email at ${answers.email}.
  `;

}
  


module.exports = generateMarkdown;
