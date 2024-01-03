/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextPage } from 'next';
import { Container } from 'react-bootstrap';
import { useRef, useEffect, useContext } from 'react';

import { ScrollReveal } from 'src/utils';
import { AppHead, Particles } from 'src/components';
import { Header, Main } from 'src/components/pages/about/gallery';
import { AppWindowContext } from '../_app';

const Gallery: NextPage = () => {
  const windowWidth = useContext(AppWindowContext);
  const galleryRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const gallery = galleryRef.current;

    if (gallery) {
      const scrollReveal = new ScrollReveal(gallery, { once: true });

      return () => {
        scrollReveal.unregister();
      };
    }
  }, [windowWidth]);

  return (
    <>
      <AppHead title="About Us - Gallery" />

      <Container as="main" fluid className="Gallery" ref={galleryRef as any}>
        <Header />
        <Main />
      </Container>

      <Particles />
    </>
  );
};

export default Gallery;