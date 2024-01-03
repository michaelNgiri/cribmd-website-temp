/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextPage } from 'next';
import { useRef, useEffect, useContext } from 'react';

import { Container } from 'react-bootstrap';

import { ScrollReveal } from 'src/utils';
import { AppHead } from 'src/components';
import { Header, Main } from 'src/components/pages/privacy';
import { AppWindowContext } from './_app';

const Privacy: NextPage = () => {
  const windowWidth = useContext(AppWindowContext);
  const privacyRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const privacy = privacyRef.current;

    if (privacy) {
      const scrollReveal = new ScrollReveal(privacy, { once: true });

      return () => {
        scrollReveal.unregister();
      };
    }
  }, [windowWidth]);

  return (
    <>
      <AppHead title="Privacy Policy" />

      <Container as="main" fluid className="pt-0 pt-md-1" ref={privacyRef as any}>
        <Header />
        <Main />
      </Container>
    </>
  );
};

export default Privacy;
