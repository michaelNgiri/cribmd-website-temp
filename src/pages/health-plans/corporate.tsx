/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextPage } from 'next';
import { useRef, useEffect, useContext } from 'react';
import { Container } from 'react-bootstrap';

import { ScrollReveal } from 'src/utils';
import { AppHead, Particles } from 'src/components';
import { Header, Main, Footer } from 'src/components/pages/health-plans/corporate';
import { AppWindowContext } from '../_app';

const Corporate: NextPage = () => {
  const windowWidth = useContext(AppWindowContext);
  const corporateRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const corporate = corporateRef.current;

    if (corporate) {
      const scrollReveal = new ScrollReveal(corporate, { once: true });

      return () => {
        scrollReveal.unregister();
      };
    }
  }, [windowWidth]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AppHead title="Plans - Corporate" />

      <Container as="main" fluid className="Corporate" ref={corporateRef as any}>
        <Header />
        <Main />
        <Footer />
      </Container>

      <Particles />
    </>
  );
};

export default Corporate;
