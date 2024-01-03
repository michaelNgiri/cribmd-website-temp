// Note: This is AppHead not Header: <head> not <header>.

import Head from 'next/head';
import React from 'react';
import { useEffect } from 'react';
import ReactGA from 'react-ga';
import { hotjar } from 'react-hotjar';
import Script from 'next/script';

// import ReactPixel from 'react-facebook-pixel';

const AppHead = ({ title }: { title?: string }): JSX.Element => {
  useEffect(() => {
    hotjar.initialize(2596802, 6);
    ReactGA.initialize('UA-205113192-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Head>
        <title>CribMD | {title || 'Home'}</title>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <meta name="facebook-domain-verification" content="96gxofy13bfpcl6007p1fezm8oo2rl" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-371256399"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-371256399');
        `}
        </Script>
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
				new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
				j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
				'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
				})(window,document,'script','dataLayer','GTM-58SQXH9');`
          }}></Script>
      </Head>
    </>
  );
};

export default AppHead;
