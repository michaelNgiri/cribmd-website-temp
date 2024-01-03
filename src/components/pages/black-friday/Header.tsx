import { Container } from 'react-bootstrap';
import { PageHeader } from 'src/components/shared';

const Header = (): JSX.Element => {
  return (
    <Container className="px-md-4">
      <PageHeader
        headerText="Our Biggest Sales Yet..."
        ctaText="Get Started"
        ctaHref="https://app.cribmd.com/signup?rURL=patient/subscribe"
        rider="We are offering massive discounts on all our health plans during our Black Friday sales."
      />
    </Container>
  );
};

export default Header;
