// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}


function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `![MIT License](https://img.shields.io/badge/license-MIT-green)`;
  }
  else if (license === 'Apache') {
    return `![Apache License](https://img.shields.io/badge/license-Apache%202.0-blue)`;
  }
  else if (license === 'KonetechI') {
    return `![KoneTechI License](https://img.shields.io/badge/license-KoneTechI-red)`;
  }
  
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `[MIT License](https://opensource.org/licenses/MIT)`;
  }
  else if (license === 'Apache') {
    return `[Apache License](https://www.apache.org/licenses/LICENSE-2.0)`;
  }
  else if (license === 'KoneTechI') {
    return `[KoneTechI License](https://opensource.org/licenses/KoneTechI)`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

function renderLicenseSection(license) {
  if (license === 'None') return '';
  return `## License\nThis project is licensed under the ${license} license.\n`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const KoneTechIInfo = `
<span style="color:red;">KoneTechI®</span> <br>
  Release 1.0,<br>
  ABCD123.0 <br>
  ${data.month}, ${data.year}
  `;
  return `${KoneTechIInfo}
   ${renderLicenseBadge(data.license)}
    
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [credits]()
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

## Installation
${data.installation}


## Usage
${data.usage}


## Credits
${data.credits}

## Contributing
${data.contributing}

 ## Tests
${data.tests}


${renderLicenseSection(data.license)}


## Questions
For any questions, please contact me at [${data.email}](mailto:${data.email}).
You can also find more of my work at [${data.github}](https://github.com/${data.github}).



'This document was last updated on ${data.month}, ${data.year}'
`;
}




export default generateMarkdown;
