import { appWithTranslation } from "next-i18next";
import mailgo from "mailgo";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    mailgo();
  }, []);

  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
