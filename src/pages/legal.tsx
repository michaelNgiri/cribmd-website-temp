/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextPage } from 'next';
import { useRef, useEffect, useContext } from 'react';

import { Container } from 'react-bootstrap';

import { ScrollReveal } from 'src/utils';
import { AppHead } from 'src/components';
import { Header, Main } from 'src/components/pages/legal';
import { AppWindowContext } from './_app';

const Legal: NextPage = () => {
  const windowWidth = useContext(AppWindowContext);
  const legalRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const legal = legalRef.current;

    if (legal) {
      const scrollReveal = new ScrollReveal(legal, { once: true });

      return () => {
        scrollReveal.unregister();
      };
    }
  }, [windowWidth]);

  return (
    <>
      <AppHead title="Terms and Condition" />

      <Container as="main" fluid className="pt-0 pt-md-1" ref={legalRef as any}>
        <Header />
        <Main />
      </Container>
    </>
  );
};

export default Legal;
