import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import { LocaleProvider } from "@context/languageContext";
import "@styles/globals.css";

// let FB = window.FB; // ok now

export default function App({ Component, pageProps }: AppProps) {
  const initFacebookSDK = () => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "724919266006904",
        cookie: true,
        xfbml: true,
        version: "v2.5",
      });
    };

    (function (d, s, id) {
      console.log(s);
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s) as HTMLScriptElement;
      js.id = id;
      js.src = `//connect.facebook.net/en_US/sdk.js`;
      fjs.parentNode?.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  };

  useEffect(() => {
    initFacebookSDK();
  }, []);

  return (
    <LocaleProvider>
      <Component {...pageProps} />
    </LocaleProvider>
  );
}
