import { XeroClient } from "xero-node";

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
}
