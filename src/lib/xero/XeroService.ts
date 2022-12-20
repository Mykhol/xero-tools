import { TokenSet, XeroClient } from "xero-node";

export class XeroService {
  xeroClient: XeroClient;
  constructor(
    clientId: string,
    clientSecret: string,
    redirects: string[],
    scopes: string[]
  ) {
    this.xeroClient = new XeroClient({
      clientId: clientId,
      clientSecret: clientSecret,
      redirectUris: redirects,
      scopes: scopes,
    });
  }

  async getXeroLinkUrl() {
    return await this.xeroClient.buildConsentUrl();
  }

  async getAccessToken(callbackUrl: string) {
    return await this.xeroClient.apiCallback(callbackUrl);
  }

  async isTokenExpired() {
    const tokenSet: TokenSet = await this.xeroClient.readTokenSet();
    console.log(tokenSet.expired() ? "expired" : "valid");
  }
}
