import axios from 'axios';

import { CONFIG } from 'src/config-global';

import { BlankView } from 'src/sections/blank/view';

// ----------------------------------------------------------------------

export const metadata = { title: `Payment Gateway - ${CONFIG.site.name}` };

export default async function Page() {
  console.log('process.env.BACKEND_URL', process.env.BACKEND_URL);
  console.log('process.env.AUTH_URL', process.env.AUTH_URL);
  console.log('process.env.USERNAME', process.env.USERNAME);
  console.log('process.env.PASSWORD', process.env.PASSWORD);
  const response = await axios.post(
    `${process.env.BACKEND_URL}${process.env.AUTH_URL}`,
    {
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const token = response.headers.token || null;
  const trazaId = response.headers.id || null;

  return <BlankView title="Page one" token={token} trazaId={trazaId} />;
}
