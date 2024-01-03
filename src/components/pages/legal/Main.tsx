/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useRef } from 'react';

import { Container } from 'react-bootstrap';

import S from 'src/styles/pages/legal/index.module.scss';
import MainIntro from './Main.Intro';
import MainBody from './Main.Body';
import MainExit from './Main.Exit';
import { Box, Anchor } from 'src/components';
import { BoxProps } from 'src/types';

export const Heading: FC<{ text: string; as?: BoxProps['as']; className?: string }> = ({
  text,
  as,
  ...other
}) => {
  const headingRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (headingRef.current) {
      (headingRef.current.parentNode as HTMLElement).id = text.replace(/\s|,/g, '-').toLowerCase();
    }
  }, [text]);

  return (
    <Box {...other} as={as || 'h2'} _ref={headingRef as any}>
      <Anchor href="#table-of-contents">{text}</Anchor>
    </Box>
  );
};

export const renderListItem = (text: string): JSX.Element => (
  <Box as="li" key={text}>
    {text}
  </Box>
);

const Main = (): JSX.Element => {
  return (
    <Container as="main" className={`${S.Main} shrink-max-width-xxl`}>
      <MainIntro />
      <MainBody />
      <MainExit />
    </Container>
  );
};

export default Main;
