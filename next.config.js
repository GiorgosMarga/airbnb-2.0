/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoiZ2lvcmdvc21hcmdhcml0aXMiLCJhIjoiY2w4Ym9wd3RnMDlmMzN4cGg3amd0ejBlaSJ9.rmIyfMDThNaQ9q5gjIR3nA",
  },
};

module.exports = nextConfig;
