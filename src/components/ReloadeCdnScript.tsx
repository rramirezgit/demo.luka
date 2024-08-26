'use client';

import { useRef, useEffect, useCallback } from 'react';

type ReloadCdnScriptProps = {
  urlCdn: string;
};

export default function ReloadCdnScript({ urlCdn }: ReloadCdnScriptProps) {
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  const loadScript = useCallback(() => {
    if (scriptRef.current) {
      // Remove the existing script if it exists
      scriptRef.current.remove();
    }

    // Create a new script element
    const script = document.createElement('script');
    script.src = urlCdn;
    script.async = true;

    // Append the script to the body
    document.body.appendChild(script);

    // Store the reference to the script element
    scriptRef.current = script;
  }, [urlCdn]);

  useEffect(() => {
    loadScript();
    // Cleanup script on component unmount
    return () => {
      if (scriptRef.current) {
        scriptRef.current.remove();
      }
    };
  }, [loadScript]);

  return { loadScript }; // Return the function to reload the script
}
