import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next/dist/server/config').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);
