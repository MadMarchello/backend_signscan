import { ComponentLoader } from 'adminjs'


import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const componentLoader = new ComponentLoader()

export const Components = {
     Dashboard: componentLoader.add(
    "Dashboard",
    path.resolve(__dirname, "Dashboard")
  ),
   // other custom components
}
