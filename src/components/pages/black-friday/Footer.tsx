// Please, note that this Footer is different from the global (or app) AppFooter that is common to all pages. This is the base/exit section of this page just before the AppFooter

import { Container } from 'react-bootstrap';
import { GetMobileAppCard } from 'src/components/shared/GetMobileAppCard';

const Footer = (): JSX.Element => {
  return (
    <Container>
      <GetMobileAppCard
        headerText="Your Doctor On The Go"
        bodyText="Book a same day appointment at your convenience either from our mobile App or web page and have a secure chat with any of our licensed doctors."
      />
    </Container>
  );
};

export default Footer;
