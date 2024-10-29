import { useCallback } from 'react';
import { isAlreadyOnSubdomain, isLocalDevelopment, constructSubdomainUrl } from '../utils/url_helper';

export const useSubdomainNavigation = () => {
  const handleSubdomainNavigation = useCallback((subdomain) => (e) => {
    e.preventDefault();
    const { protocol, hostname } = window.location;
    
    if (isAlreadyOnSubdomain(hostname, subdomain)) return;
    
    if (isLocalDevelopment(hostname)) {
      alert(`Redirecting to ${subdomain} subdomain is not available in local development.`);
      return;
    }

    const url = constructSubdomainUrl(protocol, hostname, subdomain);
    window.location.href = url;
  }, []);

  return { handleSubdomainNavigation };
};