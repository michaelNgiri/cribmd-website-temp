import { memo, useCallback, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import S from 'src/styles/pages/black-friday/index.module.scss';
import { Box, SVGIcon, Anchor, RevealOnScroll, Img } from 'src/components/shared';
import { blackFridayDealsData } from 'src/data';
import { AppWindowContext, AppModalContext } from 'src/pages/_app';
import { GetImage } from 'src/utils';
import { ContactSupport, BlackFridayTC } from 'src/components';

const MainBody = (): JSX.Element => {
  const { handleDisplayModal } = useContext(AppModalContext);
  const windowWidth = useContext(AppWindowContext);
  const handleTCLinkClick = (plan: string) => {
    handleDisplayModal!({
      displayModal: true,
      centered: true,
      header: (
        <Box as="h2" className="h3 ">
          Terms and Conditions
        </Box>
      ),
      body: <BlackFridayTC header={plan} />
    }),
      [handleDisplayModal];
  };

  const handleContactUsClick = useCallback(
    () =>
      handleDisplayModal!({
        displayModal: true,
        centered: true,
        body: <ContactSupport />
      }),
    [handleDisplayModal]
  );

  const handleRenderList = useCallback(
    (text) => (
      <Box className="d-flex align-items-start" as="p" key={text}>
        <SVGIcon name="check-circle" size="inherit" className="me-2 mt-1" />

        <Box as="span">{text}</Box>
      </Box>
    ),
    []
  );
  return (
    <>
      {/* how it works section */}
      <RevealOnScroll component={Container} className="my-md-5">
        <Box as="h3" className="mt-5 mb-4 pt-2 pt-md-4 text-md-center">
          Need more info?
        </Box>
        <Box as="p" className="text-md-center">
          To celebrate Black Friday, we are pulling out all the stops so you can enjoy incredible
          deals up to 90%. All our plans are focused on delivering a remarkable healthcare
          experience.
        </Box>
        <Box as="p" className="text-primary text-md-center">
          N.B: Refer a friend and stand a chance to win a free doctor consultation.
        </Box>
      </RevealOnScroll>

      <Container>
        {blackFridayDealsData.map(
          useCallback(
            ({ heading, list, p1, p2, buttonText, buttonURL, imageName, showModal }, i) => (
              <Row key={heading} className="my-3 my-md-5 align-items-center py-md-4 py-3">
                <RevealOnScroll
                  component={Col}
                  xs={12}
                  md={6}
                  allowOverflow
                  className={`${i % 2 === 0 ? '' : 'order-md-1'}`}>
                  <Box as="h3" className="h5">
                    <Box as="span">{heading}</Box>
                  </Box>
                  <Box>{p1 && <Box as="p">{p1}</Box>}</Box>

                  {list?.map(handleRenderList)}
                  <Box
                    as="p"
                    className={`${S.tcLink} text-primary`}
                    onClick={() => handleTCLinkClick(heading)}>
                    <SVGIcon name="check-circle" size="inherit" className="me-2 mt-1" />
                    Terms and Conditions apply
                  </Box>

                  {p2 && (
                    <Box as="p" className={`${S.dealOptionCard}`}>
                      <span role="img" aria-label="light-bulb" className="me-2">
                        💡
                      </span>
                      {p2}
                    </Box>
                  )}

                  {buttonURL && (
                    <Box data-anim="fadeInRight">
                      <Anchor button href={buttonURL} variant="outlined">
                        {buttonText}
                      </Anchor>
                    </Box>
                  )}

                  {showModal && (
                    <Box data-anim="fadeInRight">
                      <Anchor button onClick={handleContactUsClick} variant="outlined">
                        {buttonText}
                      </Anchor>
                    </Box>
                  )}
                </RevealOnScroll>

                <RevealOnScroll
                  component={Col}
                  xs={12}
                  md={6}
                  className={`text-center ${
                    i % 2 === 0 ? 'ps-md-5 text-md-end' : 'pe-md-5 text-md-start'
                  }`}
                  delay={windowWidth < 768 ? 0 : 0.65}
                  allowOverflow>
                  <Img
                    src={GetImage.blackFriday(imageName)}
                    width="450"
                    height="420"
                    className={`mt-5 mt-md-0`.trim()}
                    alt={`image of ${imageName.replace('-', ' ')}`}
                  />
                </RevealOnScroll>
              </Row>
            ),
            [windowWidth, handleRenderList]
          )
        )}
      </Container>
    </>
  );
};

export default memo(MainBody);
