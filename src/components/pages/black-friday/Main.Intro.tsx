import { memo, useState, useEffect, useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import S from 'src/styles/pages/black-friday/index.module.scss';
import { Box, RevealOnScroll, Img } from 'src/components/shared';
import { AppWindowContext } from 'src/pages/_app';
import { GetImage } from 'src/utils';

const MainIntro = (): JSX.Element => {
  const windowWidth = useContext(AppWindowContext);
  const imageName = 'doctor-home-visit';

  const timerComponents: any = [];
  const calculateTimeLeft = () => {
    const year = new Date().getFullYear();
    const difference = +new Date(`${year}-11-22`) - +new Date();
    let timeLeft: any = {};

    if (difference > 0) {
      timeLeft = {
        DAYS: Math.floor(difference / (1000 * 60 * 60 * 24)),
        HRS: Math.floor((difference / (1000 * 60 * 60)) % 24),
        MIN: Math.floor((difference / 1000 / 60) % 60),
        SEC: Math.floor((difference / 1000) % 60)
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
    timerComponents.push(
      <>
        <Box className={`${S.countDownItem} p-3 p-lg-4 `}>
          <Box className={`${S.item}`}>{timeLeft[interval]}</Box>
          <Box className={`${S.interval}`}>{interval}</Box>
        </Box>
      </>
    );
  });

  return (
    <>
      <Box className={`${S.mediaItemContainer}`}>
        <Box className={`${S.mediaImageContainer} __grid-item d-flex align-items-center`}>
          <iframe
            title="Black Friday Video"
            src="https://www.youtube.com/embed/Zn_sFEriWz0"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Box>
      </Box>

      <RevealOnScroll component={Container} className="my-md-5">
        <Box as="h3" className="mt-5 mb-4 pt-2 pt-md-4 text-md-center">
          Black Friday deals are now available
        </Box>
      </RevealOnScroll>

      {/* <Box as="section">
        <RevealOnScroll
          as="section"
          className={`${S.countDownGrid} align-items-stretch`}
          animName="fadeInRight"
          duration={1}>
          {timerComponents.length ? (
            timerComponents
          ) : (
            <Box className="text-center align-self-center">Time &apos; s up!</Box>
          )}
        </RevealOnScroll>
      </Box> */}

      <Row className="my-3 my-md-5 align-items-center py-md-4 py-3">
        <RevealOnScroll component={Col} xs={12} md={6} allowOverflow>
          <Box as="p">
            Want to get ahead of the game? We have awesome deals for you all through November
          </Box>
          <Box as="p">
            As you know, your health is our priority, so we&apos;ve decided to make you enjoy
            premium health services at super affordable rates on all our health plans and packages
            from 21st - 29th of November 2021.
          </Box>
          <Box as="p">
            What&apos;s more, you also stand a chance to win lots of fantastic prizes during this
            year&apos;s Black Friday and Cyber Monday sales.
          </Box>
          <Box as="p">You snooze, you lose!</Box>
        </RevealOnScroll>

        <RevealOnScroll
          component={Col}
          xs={12}
          md={6}
          className="text-center ps-md-5 text-md-end"
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
    </>
  );
};

export default memo(MainIntro);
