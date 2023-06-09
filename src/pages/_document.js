import { getCssText } from "@/styles/pages";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </body>
    </Html>
  );
}
