/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'x-hello-from-next-config',
            value: 'hello',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
