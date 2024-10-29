import { LOCAL_HOSTNAMES } from '../constants/config';

export const isAlreadyOnSubdomain = (hostname, subdomain) => 
  hostname.startsWith(`${subdomain}.`);

export const isLocalDevelopment = (hostname) => 
  LOCAL_HOSTNAMES.includes(hostname);

export const constructSubdomainUrl = (protocol, hostname, subdomain) => {
  const domainParts = hostname.split('.');
  if (domainParts.length > 2) {
    domainParts[0] = subdomain;
  } else {
    domainParts.unshift(subdomain);
  }
  return `${protocol}//${domainParts.join('.')}`;
};