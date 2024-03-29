/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextPage } from 'next';
import { useRef, useEffect, useContext } from 'react';
import { Container } from 'react-bootstrap';

import { ScrollReveal } from 'src/utils';
import { AppHead, Particles } from 'src/components';
import { Header, Main, Footer } from 'src/components/pages/about/our-company';
import { AppWindowContext } from '../_app';

const OurCompany: NextPage = () => {
  const windowWidth = useContext(AppWindowContext);
  const ourCompanyRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ourCompany = ourCompanyRef.current;

    if (ourCompany) {
      const scrollReveal = new ScrollReveal(ourCompany, { once: true });

      return () => {
        scrollReveal.unregister();
      };
    }
  }, [windowWidth]);

  return (
    <>
      <AppHead title="About Us - Our Company" />

      <Container as="main" fluid className="OurCompany" ref={ourCompanyRef as any}>
        <Header />
        <Main />
        <Footer />
      </Container>

      <Particles />
    </>
  );
};

export default OurCompany;
