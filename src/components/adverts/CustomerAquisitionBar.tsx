import { FC, memo, useCallback, useContext, useState, useRef, useEffect } from 'react';

import { Container } from 'react-bootstrap';

import { Box, Button } from '../shared';
import { IconProps } from 'src/types';
import { SVGIcon } from '../shared/SVG.Icons';
import { AppModalContext, AppWindowContext } from 'src/pages/_app';
import { Instant1KConsultation } from 'src/components';
import { delay } from 'src/utils';

const _CustomerAcquisitionBar: FC = () => {
  const windowWidth = useContext(AppWindowContext);
  const { handleDisplayModal } = useContext(AppModalContext);
  const [hide, setHide] = useState(false);
  const [renderKids, setRenderKids] = useState(true);
  const customerAcquisitionBarRef = useRef<HTMLElement | null>(null);

  const handleMoreClick = useCallback(
    () =>
      handleDisplayModal!({
        displayModal: true,
        centered: true,
        body: <Instant1KConsultation />
      }),
    [handleDisplayModal]
  );

  const handleCloseClick = useCallback(() => {
    setHide(true);
  }, []);

  useEffect(() => {
    if (windowWidth) {
      const CABar = customerAcquisitionBarRef.current as HTMLElement;

      if (CABar) {
        CABar.style.height = 'auto';
      }

      delay(500, () => {
        if (CABar) {
          CABar.style.height = `${CABar.offsetHeight}px`;
        }
      });
    }
  }, [windowWidth]);

  return (
    <Container
      className={`CustomerAcquisitionBar d-flex align-items-md-center ${hide ? 'hidden' : ''}`}
      ref={customerAcquisitionBarRef as any}
      onTransitionEnd={useCallback(() => {
        setRenderKids(!hide);
      }, [hide])}>
      {renderKids && (
        <>
          <SVGIcon name="star-wallet" size="small" className="me-3" />
          <Box className="d-block d-md-flex align-items-center flex-fill">
            <Box className="me-2">
              <Box as="strong" className="me-2">
                Consult a doctor instantly for N1,000 only!
              </Box>
              <Box className="d-block d-md-none" />
              <Box as="span">No Monthly Subscription! No Recurring Charges!</Box>
            </Box>

            <Box className="d-flex justify-content-end d-md-inline-flex align-items-center ms-md-auto mt-2 mt-md-0">
              <Button
                variant="text"
                color="primary"
                className="more-btn me-2 text-overflow-ellipsis"
                onClick={handleMoreClick}>
                Learn More
              </Button>
              <Button _type="icon-button" onClick={handleCloseClick}>
                <SVGIcon name="times" />
              </Button>
            </Box>
          </Box>
        </>
      )}
    </Container>
  );
};

export const CustomerAcquisitionBar: FC<IconProps> = memo(_CustomerAcquisitionBar);
