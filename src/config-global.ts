import packageJson from '../package.json';

// ----------------------------------------------------------------------

export type ConfigValue = {
  isStaticExport: boolean;
  site: {
    name: string;
    serverUrl: string;
    assetURL: string;
    basePath: string;
    version: string;
  };
  backendUrl: string;
  authUrl: string;
  userName: string;
  password: string;
  urlCdn: string;
};

// ----------------------------------------------------------------------

export const CONFIG: ConfigValue = {
  site: {
    name: 'Demo Luka',
    serverUrl: process.env.NEXT_PUBLIC_SERVER_URL ?? '',
    assetURL: process.env.NEXT_PUBLIC_ASSET_URL ?? '',
    basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '',
    version: packageJson.version,
  },
  isStaticExport: JSON.parse(`${process.env.BUILD_STATIC_EXPORT}`),
  backendUrl: process.env.BACKEND_URL ?? '',
  userName: process.env.USERNAME ?? '',
  password: process.env.PASSWORD ?? '',
  authUrl: process.env.AUTH_URL ?? '',
  urlCdn: process.env.URL_CDN ?? '',
};
