import { FC, memo, useCallback, useContext, useState, useRef, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Box, Button } from '../shared';
import { IconProps } from 'src/types';
import { SVGIcon } from '../shared/SVG.Icons';
import { AppWindowContext } from 'src/pages/_app';
import { delay } from 'src/utils';
import { useRouter } from 'next/router';

const _BlackFridayDealsBar: FC = () => {
  const router = useRouter();
  const windowWidth = useContext(AppWindowContext);
  const [hide, setHide] = useState(false);
  const [renderKids, setRenderKids] = useState(true);
  const timerComponents: any = [];

  const blackFridayDealsBarRef = useRef<HTMLElement | null>(null);

  const handleCloseClick = useCallback(() => {
    setHide(true);
  }, []);

  const calculateTimeLeft = () => {
    const year = new Date().getFullYear();
    const difference = +new Date(`${year}-11-22`) - +new Date();
    let timeLeft: any = {};

    if (difference > 0) {
      timeLeft = {
        DAYS: Math.floor(difference / (1000 * 60 * 60 * 24)),
        HOURS: Math.floor((difference / (1000 * 60 * 60)) % 24),
        MINUTES: Math.floor((difference / 1000 / 60) % 60)
        // SECONDS: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  // const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
    interval == 'MINUTES'
      ? timerComponents.push(
          <Box as="span">
            {timeLeft[interval]} {interval}
          </Box>
        )
      : timerComponents.push(
          <Box>
            {timeLeft[interval]} {interval}
            {' : '}
          </Box>
        );
  });

  useEffect(() => {
    if (windowWidth) {
      const BFDBar = blackFridayDealsBarRef.current as HTMLElement;

      if (BFDBar) {
        BFDBar.style.height = 'auto';
      }

      delay(500, () => {
        if (BFDBar) {
          BFDBar.style.height = `${BFDBar.offsetHeight}px`;
        }
      });
    }
  }, [windowWidth]);

  return (
    <Container
      className={`CustomerAcquisitionBar d-flex align-items-md-center ${hide ? 'hidden' : ''}`}
      ref={blackFridayDealsBarRef as any}
      onTransitionEnd={useCallback(() => {
        setRenderKids(!hide);
      }, [hide])}>
      {renderKids && (
        <>
          <Box className="d-block d-md-flex align-items-center flex-fill">
            <Box className="me-2 ms-3">
              <Box as="span" className="me-2">
                <span role="img" aria-label="light-bulb" className="me-2">
                  🎉
                </span>
                Black Friday Deals are live now!
              </Box>
              <Box className="d-block d-md-none" />
            </Box>

            <Box className="d-flex justify-content-end d-md-inline-flex align-items-center ms-md-auto mt-2 mt-md-0">
              {/* <Box className="me-3 ms-3">
                {timerComponents.length ? timerComponents : <span>Time&apos;s up!</span>}
              </Box> */}
              <Button
                variant="text"
                color="primary"
                className="more-btn me-2 text-overflow-ellipsis"
                onClick={() => router.push(`black-friday`)}>
                More details
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

export const BlackFridayDealsBar: FC<IconProps> = memo(_BlackFridayDealsBar);
