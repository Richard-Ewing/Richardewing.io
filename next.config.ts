import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/advisory.html',
        destination: '/advisory',
        permanent: true,
      },
      {
        source: '/manifesto.html',
        destination: '/manifesto',
        permanent: true,
      },
      {
        source: '/system.html',
        destination: '/system',
        permanent: true,
      },
      {
        source: '/briefings.html',
        destination: '/briefings',
        permanent: true,
      },
      {
        source: '/the-operator.html',
        destination: '/principal',
        permanent: true,
      },
      {
        source: '/q-pep-product-economics-protocol',
        destination: '/system',
        permanent: true,
      },
      {
        source: '/canonical/kill-switch.html',
        destination: '/briefings',
        permanent: true,
      },
      {
        source: '/canonical/capital-allocation-strategy.html',
        destination: '/briefings',
        permanent: true,
      },
      {
        source: '/studio.html',
        destination: '/advisory',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
