import fs from 'fs';
import path from 'path';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            results.push(file);
        }
    });
    return results;
}

const files = walk('./src').filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    let original = content;

    // Replace <Link to="/contact"> -> <Link to="?contact=true">
    content = content.replace(/to="\/contact"/g, 'to="?contact=true"');

    // Replace href: "/contact" -> href: "?contact=true"
    content = content.replace(/href:\s*["']\/contact["']/g, 'href: "?contact=true"');

    // Make sure we didn't touch the React Router Route def by accident.
    // Wait, the router definition is in App.tsx. It's path="/contact". Our regex is `to="/contact"` or `href: "/contact"`.
    // So it won't touch `path="/contact"`. Good!

    if (content !== original) {
        fs.writeFileSync(f, content);
        console.log('Updated', f);
    }
});
