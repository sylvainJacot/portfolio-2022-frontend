// found on https://github.com/vercel/next.js/blob/main/examples/with-styled-components/.babelrc

import Document from "next/document";
import { ServerStyleSheet } from "styled-components";
import { Html } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            <Html lang="en">
              {initialProps.styles}
              {sheet.getStyleElement()}
            </Html>
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
