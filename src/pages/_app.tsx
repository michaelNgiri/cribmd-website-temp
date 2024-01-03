/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState, useEffect, useMemo, useCallback } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import 'src/styles/app.scss';
import { AppNav, AppFooter, AppModal, AppPageViewTracker, FreeConsultation } from 'src/components';
import { throttle, delay } from 'src/utils';
import { AppModalContextValue, ReferralRokenExists } from 'src/types';
import { apiBaseURL } from 'src/constants';

export const AppContext = createContext({});
export const AppWindowContext = createContext<number>(globalThis.innerWidth);
export const AppModalContext = createContext<AppModalContextValue>({});

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const _window = globalThis || window;
  const [windowWidth, setWindowWidth] = useState(_window.innerWidth);
  const [displayModal, setDisplayModal] = useState(false);
  const [appModalContent, setAppModalContent] = useState<AppModalContextValue>({
    header: null,
    body: null,
    footer: null,
    displayModal,
    centered: false
  });
  const appModalContextValue = useMemo<AppModalContextValue>(
    () => ({
      header: appModalContent.header,
      body: appModalContent.body,
      footer: appModalContent.footer,
      centered: appModalContent.centered,
      modalClassName: appModalContent.modalClassName,
      displayModal
    }),
    [
      appModalContent.header,
      appModalContent.body,
      appModalContent.footer,
      appModalContent.centered,
      appModalContent.modalClassName,
      displayModal
    ]
  );
  const pathname = _window.location?.pathname;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const refCodeExists = async (refCode: string) => {
    try {
      const response: ReferralRokenExists = await (
        await fetch(
          `${apiBaseURL}/patient/check_if_referal_token_exist?user_referal_token=${refCode}`,
          {
            method: 'GET',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json; charset=utf-8'
            }
          }
        )
      ).json();

      const div = document.querySelector('#__next > div');
      const text = 'Redirecting you to the Web App...';

      if (response.referral_code_exist) {
        if (div) {
          div.innerHTML = `<div style="display: flex;color: royalblue; align-items: center; padding: 2em; justify-content: center">${text}</div>`;
        } else {
          document.body.innerHTML = text;
        }
        delay(5).then(
          () => (_window.location.href = `https://app.cribmd.com/signup?ref=${refCode}`)
        );
      }
      // eslint-disable-next-line no-empty
    } catch (e: any) {}
  };

  const handleDisplayModal = useCallback((content: AppModalContextValue) => {
    setDisplayModal((displaying) => {
      setAppModalContent((previousContent) =>
        displaying ? { ...previousContent, ...content } : content
      );
      return !displaying;
    });
  }, []);

  useEffect(() => {
    let _throttle: NodeJS.Timeout;

    _window.onresize = () => {
      clearTimeout(_throttle);
      _throttle = throttle(() => {
        setWindowWidth(_window.innerWidth);
      }, 200);
    };
    _window.document.querySelector('html')!.lang = 'en-UK';
    setTimeout(() => {
      _window.document.querySelector('head')!.insertAdjacentHTML(
        'afterbegin',
        `
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:400,500,600&amp;display=swap"
        rel="stylesheet"
      />
    `
      );
    }, 25);
    _window.document.onmouseleave = () => {
      if (localStorage.getItem('fc_seen') !== 'true') {
        handleDisplayModal!({ displayModal: true, centered: true, body: <FreeConsultation /> });
        localStorage.setItem('fc_seen', 'true');
      }
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const refCode = pathname.replace(/\//g, '');

    refCodeExists(refCode);
  }, [pathname, refCodeExists]);

  if (/^\/(patient|doctor|corp|dashboard|login|signup|register)/.test(pathname)) {
    delay(25).then(() => {
      const div = document.querySelector('#__next > div');
      const text = 'Redirecting you to the Web App @ app.cribmd.com ...';

      if (div) {
        div.innerHTML = `<div style="display: flex;color: royalblue; align-items: center; padding: 2em; justify-content: center">${text}</div>`;
      } else {
        document.body.innerHTML = text;
      }

      delay(1000).then(() => (_window.location.href = `https://app.cribmd.com${pathname}`));
    });
  }

  delay(10).then(() => {
    if (_window) {
      switch (true) {
        case pathname?.endsWith('about'):
          _window.location.pathname = '/about/our-company';
          break;
        case pathname?.startsWith('/home'):
          _window.location.pathname = '/';
      }
    }
  });

  return (
    <AppModalContext.Provider
      value={useMemo(
        () => ({ ...appModalContextValue, handleDisplayModal }),
        [appModalContextValue, handleDisplayModal]
      )}>
      <AppWindowContext.Provider value={windowWidth}>
        <Head>
          <meta
            name="description"
            content="Author: CribMD Telemedicine and Doctor Home Visit, Desc: We are a technology company that offers low cost medical services from online to door-step outreach."
          />
          <meta
            name="keywords"
            content="telemedicine, doctor home visit, technology in health, medical services, door-step outreach, video call,pharmacy in nigeria, health prescriptions, health consultation, healthcare in nigeria, healthcare assistant, medication, health plan, COVID, telemedicine in nigeria, doctors in nigeria, telemedicine app, cribmd website, cribmd app, cribmd plans, cribmd login, cribmd reviews,reliance hmo plans, reliance hmo app, reliance hmo login, reliance hmo reviews, dermatology, pediatrics, general practice, gynecology, optometry, family medicine, endocrinology, cardiology"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/favicon.ico" />
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1982922519376129"
            crossOrigin="anonymous"></script>
        </Head>

        <AppNav />
        <AppModal />
        <Component {...pageProps} />
        <AppFooter />
        {/* Start of HubSpot Embed Code */}
        <script
          async
          defer
          type="text/javascript"
          id="hs-script-loader"
          src="//js.hs-scripts.com/8493263.js"
        />
        {/* End of HubSpot Embed Code */}
        <AppPageViewTracker />
      </AppWindowContext.Provider>
    </AppModalContext.Provider>
  );
};

export default App;
