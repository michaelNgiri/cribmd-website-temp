import { memo, useCallback, useMemo } from 'react';
import { Container } from 'react-bootstrap';

import { Box, SVGIcon, Anchor, RevealOnScroll } from 'src/components/shared';
import S from 'src/styles/pages/health-plans/individual/Main.module.scss';
// import { AppWindowContext } from 'src/pages/_app';
import { individualBenefitsData } from '../../../../data/health-plans/individual';
import { preventDefault } from 'src/utils';

const MainIntro = (): JSX.Element => {
  // const windowWidth = useContext(AppWindowContext);

  const handleRenderList = useCallback(
    ({ content, header }) =>
      content ? (
        <Box key={header}>
          <Box as="span" className="me-3">
            {content === 'checked' ? (
              <SVGIcon name="check(blue)" size="inherit" />
            ) : (
              <SVGIcon name="check(grey)" size="inherit" />
            )}
          </Box>
          {header}
        </Box>
      ) : null,
    []
  );

  return (
    <Container className="mb-5">
      <RevealOnScroll>
        <Box as="h2">Benefits</Box>
      </RevealOnScroll>

      <Box className={S.benefitsGrid}>
        {/* {windowWidth > 767 && false && (
          <Box className={`${S.benefitsGrid}`}>
            {benefitsData.map(({ header, list, list1, footer, price: fee }, i) => (
              <Box
                key={header}
                className={`${S.benefitsContainer} ${i !== 0 ? 'text-center' : ''}`}>
                <Box className={`${i !== 0 ? 'justify-content-center' : ''}`}>
                  <Box as="h2" className="h6">
                    {header}
                  </Box>
                </Box>
                <Box className={`${i !== 0 ? S.careCount : ''}`}>
                  <Box as="p">
                    {list1 === 'checked' ? <SVGIcon name="check(blue)" size="inherit" /> : list1}
                  </Box>
                </Box>
                {list.map(({ content }) => (
                  <Box key={i} className={`${i !== 0 ? 'justify-content-center' : ''}`}>
                    {content === 'checked' ? (
                      <SVGIcon name="check(blue)" size="inherit" />
                    ) : (
                      content
                    )}
                  </Box>
                ))}
                <Box className="justify-content-center">
                  {i === 0 ? (
                    <Box>
                      <SVGIcon name="download-cloud" />
                      <Box as="span" className="ms-2">
                        {footer}
                      </Box>
                    </Box>
                  ) : (
                    <Box className={`${S.subscribeButton} py-`}>
                      <Box as="i" className="ms-2">
                        {footer}
                      </Box>
                      <br></br>
                      <Box as="i" className="ms-2">
                        {fee}
                      </Box>
                    </Box>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        )} */}

        {useMemo(() => individualBenefitsData.slice(1), []).map(
          useCallback(
            ({ header, list, list1, footer, price }, i) => (
              <RevealOnScroll key={header} className={`${S.benefitsContainer} secondary-content`}>
                <Box className={`justify-content-between flex-wrap`}>
                  <Box as="h2" className="h6">
                    {header}
                  </Box>
                  <Box className={`${S.careCount}`}>
                    <Box as="p">
                      {list1 === 'checked' ? <SVGIcon name="check(blue)" size="inherit" /> : list1}
                    </Box>
                  </Box>
                </Box>
                {list.map(handleRenderList)}

                <Box className="text-center">
                  <Anchor
                    button
                    href="http://app.cribmd.com/signup?rURL=patient/subscribe"
                    className={`flex-column align-item-center w-100 py-2`}
                    variant={i === 2 ? 'contained' : 'outlined'}
                    color="primary">
                    <Box as="small" className="ms-2">
                      {footer}
                    </Box>
                    <Box as="span" className="ms-2">
                      {price}
                    </Box>
                  </Anchor>
                </Box>
              </RevealOnScroll>
            ),
            [handleRenderList]
          )
        )}
      </Box>

      <RevealOnScroll className="text-center">
        <Anchor
          className="d-inline-flex align-items-center my-3"
          variant="text"
          href="/"
          onClick={useCallback(
            (e) =>
              preventDefault(() => {
                window.location.href =
                  'https://drive.google.com/uc?export=download&id=1rPC62Kbir23cOfPH_RIIevdDW9p3q9Hz';
              })(e),
            []
          )}>
          <SVGIcon name="download-cloud" className="me-2" /> Download full Coverage Document
        </Anchor>
      </RevealOnScroll>
    </Container>
  );
};

export default memo(MainIntro);
