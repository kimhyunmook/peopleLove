/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    incrementalCacheHandlerPath: "node_modules/@next/cache", // 캐시 경로 설정
  },
};

export default nextConfig;
