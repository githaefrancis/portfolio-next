// 'use client'
import Script from "next/script";
export default function UtilScript() {
  const G_ANALYTICS_ID = process.env.PUBLIC_NEXT_G_ANALYTICS_ID;
  return (
    <>
      <Script
      id='google_tag'
        src={`https://www.googletagmanager.com/gtag/js?id=${G_ANALYTICS_ID}`}
      ></Script>
      <Script
      id='gtagconfig'
      >
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${G_ANALYTICS_ID}');
`}
      </Script>
    </>
  );
}
