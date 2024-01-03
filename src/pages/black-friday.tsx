/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextPage } from 'next';
import { useRef, useEffect, useContext } from 'react';
import { Container } from 'react-bootstrap';
import { ScrollReveal } from 'src/utils';
import { AppHead } from 'src/components';
import { Header, Main, Footer } from 'src/components/pages/black-friday';
import { AppWindowContext } from './_app';

const BlackFriday: NextPage = () => {
  const windowWidth = useContext(AppWindowContext);
  const blackFridayRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const blackFriday = blackFridayRef.current;

    if (blackFriday) {
      const scrollReveal = new ScrollReveal(blackFriday, { once: true });

      return () => {
        scrollReveal.unregister();
      };
    }
  }, [windowWidth]);

  return (
    <>
      <AppHead title="Black Friday Deal" />

      <Container as="main" fluid className="pt-0 pt-md-1" ref={blackFridayRef as any}>
        <Header />
        <Main />
        <Footer />
      </Container>
    </>
  );
};

export default BlackFriday;
