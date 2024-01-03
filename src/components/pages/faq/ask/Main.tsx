import { Container } from 'react-bootstrap';

import S from 'src/styles/pages/faq/index.module.scss';
import { Box } from 'src/components';
import Form from './Form';

const AskMain = (): JSX.Element => {
  return (
    <Container
      as="main"
      className={`${S.Main} ${S.AskMain} shrink-max-width-xxl anim__fadeInUp anim__del--1s`}>
      <Box as="h2" className="text-md-center">
        Ask Us!
      </Box>

      <Form />
    </Container>
  );
};

export default AskMain;
