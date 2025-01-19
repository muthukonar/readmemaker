// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}


function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `![MIT License](https://img.shields.io/badge/license-MIT-green)`;
  } 
  else if (license === 'KonetechI') {
    return `![KoneTechI License](https://img.shields.io/badge/license-KoneTechI-red)`;
  } 
  // else if (license === ‘Oracle’) {
  //   return `![Oracle License](https://img.shields.io/badge/license-Oracle-blue)`;
  // }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `[MIT License](https://opensource.org/licenses/MIT)`;
  } 
  else if (license === 'KoneTechI') {
    return `[KoneTechI License](https://opensource.org/licenses/KoneTechI)`;
  }
  //  else if (license === ‘Oracle’) {
  //   return `[Oracle License](https://www.oracle.com/corporate/license-management-services)`;
  // }
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
  ### KoneTechI® 
  README,
  Release 1.0,
  ABCD123.0 \n
  ${data.month}, ${data.year}
  `;
      return `${KoneTechIInfo}
    
  # ${data.title}


  ${renderLicenseBadge(data.license)}

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

`;
}

export default generateMarkdown;
