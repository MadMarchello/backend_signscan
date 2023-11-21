import { ComponentLoader } from 'adminjs'


import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename);
console.log(__dirname);

const componentLoader = new ComponentLoader()
componentLoader.override('SidebarFooter', path.resolve(__dirname, "SidebarFooter"));
componentLoader.override('Login', path.resolve(__dirname, "Login"));

const Components = {
  Dashboard: componentLoader.add("Dashboard", path.resolve(__dirname, "Dashboard")),
}

export { componentLoader, Components }