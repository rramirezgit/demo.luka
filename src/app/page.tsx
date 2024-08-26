'use client';

import { useEffect } from 'react';

import { useRouter } from 'src/routes/hooks';

// ----------------------------------------------------------------------

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.push('/demo');
  }, [router]);

  return null;
}
