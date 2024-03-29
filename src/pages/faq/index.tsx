/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextPage } from 'next';
import { useRef, useEffect, useContext } from 'react';

import { Container } from 'react-bootstrap';

import { AppHead, Particles } from 'src/components';
import { Header, IndexMain, Footer } from 'src/components/pages/faq';
import { ScrollReveal } from 'src/utils';

import { AppWindowContext } from '../_app';

const FAQ: NextPage = () => {
  const windowWidth = useContext(AppWindowContext);
  const faqRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const faq = faqRef.current;

    if (faq) {
      const scrollReveal = new ScrollReveal(faq, { once: true });

      return () => {
        scrollReveal.unregister();
      };
    }
  }, [windowWidth]);

  return (
    <>
      <AppHead title="FAQ" />

      <Container as="main" fluid className="FAQ" ref={faqRef as any}>
        <Header />
        <IndexMain />
        <Footer />
      </Container>

      <Particles />
    </>
  );
};

export default FAQ;
