const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const pagesDir = path.join(srcDir, 'pages');

const pages = [
    'SecurityPage', 'CaseStudiesPage', 'ServicesPage', 'ProcessPage', 'AboutPage', 'PrivacyPage', 'TermsPage', 'ContactPage'
];

pages.forEach(p => {
    fs.writeFileSync(path.join(pagesDir, `${p}.tsx`), `export function ${p}() {
    return <div className="container mx-auto px-4 py-24">${p} coming soon...</div>;
}
`);
});
