import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://localhost:8443/dev/oauth/anonymous',
  redirectUri: window.location.origin,
  clientId: 'spa-public',
  responseType: 'code',
  scope: 'openid',
  showDebugInformation: true,
  strictDiscoveryDocumentValidation: false,
};
