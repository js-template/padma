/* eslint-disable turbo/no-undeclared-env-vars */
import { useEffect, useState, type ReactElement } from "react";
import type { AppProps } from "next/app";
import { GoogleAnalytics } from "nextjs-google-analytics";

import "../style.css";

export default function Nextra({
  Component,
  pageProps,
}: AppProps): ReactElement {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}
