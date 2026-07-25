import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const requestedBasePath =
  process.env.SITE_BASE_PATH ?? "/My-Website/existentialism-humanism-guide";
const basePath =
  requestedBasePath === "/"
    ? ""
    : `/${requestedBasePath.replace(/^\/+|\/+$/g, "")}`;
const requestedAssetPrefix = process.env.SITE_ASSET_PREFIX;
const assetPrefix = requestedAssetPrefix ?? basePath;
const publicAssetBasePath =
  requestedAssetPrefix === "." ? "." : basePath;
const projectRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_SITE_BASE_PATH: publicAssetBasePath,
  },
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
