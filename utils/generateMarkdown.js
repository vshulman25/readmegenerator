// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![License](https://img.shields.io/badge/License-${license}%20-blue.svg)`
  }


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
return `# Link License Link - https://opensource.org/licenses/${license}-.org/`

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `# License - ${license}
  
  `;
}

// TODO: Create a function to generate markdown for README ** template literal formatting
function generateMarkdown(data) {
  return `# Project Title - \n* ${data.title} \n
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
   # Description - ${data.description}
   # Installation - ${data.install}
   # Usage - ${data.usage}
   # Contributing - ${data.contributing}
   # Tests - ${data.tests}
   # Live Link - ${data.url}
`;
}

module.exports = generateMarkdown;
