import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { crx, ManifestV3Export } from "@crxjs/vite-plugin"
import man from "./manifest.json"

const manifest = man as ManifestV3Export

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
})
