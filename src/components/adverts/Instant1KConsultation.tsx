import { FC, memo, useCallback } from 'react';

import { Box, Img, SVGIcon, Anchor, Icon } from 'src/components/shared';
import { GetImage } from 'src/utils';

const introTexts = [
  'Firstly, achieving your health goals is simple with the right partner by your side.',
  'Secondly, with our Swift Health Plan, we have made it easier for you to enjoy our services without bothering about recurring payments.',
  'The best part? We let you dictate your coverage so that you can feel at ease.',
  'Now, choose the CribMD Swift Health Plan for more control of your healthcare needs!'
];
const stepTexts = [
  {
    heading: 'Call/Email/Chat instantly with our support assistants',
    body: 'Communicate your complaints from little to life-altering issues.'
  },
  {
    heading: 'Pay for just the help you need',
    body: 'No monthly service charges. No hidden fees.'
  },
  {
    heading: 'Consult with all kinds of Experts',
    body: 'Get connected with expert doctors instantly.'
  }
];
const animatedTextDelay = 5;
const animatedStepDelay = 5;

const _Instant1KConsultation: FC = () => {
  return (
    <Box className={`Advert Instant1KConsultation`}>
      <Box as="header">
        <Img
          src=""
          width="200"
          height="168"
          srcSet={`
          ${GetImage.advert('boy-texting')} 1x,
          ${GetImage.advert('boy-texting', '2x')} 2x`}
        />
      </Box>
      <Box as="main" className="text-center">
        <Box as="h2" className="h3 mb-4">
          CribMD Swift Health - Starting at N1, 000
        </Box>

        <Box className="intro-texts">
          {introTexts.map(
            useCallback(
              (text, i) => (
                <Box
                  as="p"
                  key={text}
                  className="animated intro-text mt-0"
                  style={{
                    animationDelay: `${i * animatedTextDelay}s`,
                    animationDuration: `${introTexts.length * animatedTextDelay}s`
                  }}>
                  {text}
                </Box>
              ),
              []
            )
          )}

          <Box as="p" className="invisible-text">
            {introTexts[1]}
          </Box>
        </Box>

        <Box as="h3" className="h4 mt-5">
          Register in three steps
        </Box>

        <Box as="section" className="register-steps text-center">
          {stepTexts.map(
            useCallback(
              ({ heading, body }, i) => (
                <Box key={body} className="step-container">
                  <Icon
                    className="step-number animated"
                    size="large"
                    style={{
                      animationDelay: `${i * animatedStepDelay}s`,
                      animationDuration: `${stepTexts.length * animatedStepDelay}s`
                    }}>
                    {i + 1}
                  </Icon>
                  <Box
                    className="step animated"
                    style={{
                      animationDelay: `${i * animatedStepDelay}s`,
                      animationDuration: `${stepTexts.length * animatedStepDelay}s`
                    }}>
                    <Box as="strong">{heading}</Box>
                    <Box as="p">{body}</Box>
                  </Box>
                </Box>
              ),
              []
            )
          )}

          <Box className="step-container invisible-text">
            <Icon className="step-number">1</Icon>
            <Box className="step">
              <Box as="strong">{stepTexts[0].heading}</Box>
              <Box as="p">{stepTexts[0].body}</Box>
            </Box>
          </Box>
        </Box>

        <Box as="section" className="__body-action-card">
          <Box as="p" className="mt-0 mb-4 px-sm-4 fw-bold">
            Get medical help now!
          </Box>
          <Box>
            <Anchor
              href="tel:+2349060346075"
              button
              color="indigo"
              variant="contained"
              className="mx-2">
              Call us <SVGIcon name="phone" className="ms-3" size="tiny" />
            </Anchor>
            <Anchor
              href="mailto:support@cribmd.com?subject=CribMD%20Swift%20Health!&amp;body=I%20would%20like%20a%20consultation%20with%20a%20doctor%20on%20the%20SwiftHealth%20plan"
              button
              color="indigo"
              variant="contained"
              className="mt-2 mt-sm-0 mx-2">
              Email us <SVGIcon name="mail" className="ms-3" size="tiny" />
            </Anchor>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const Instant1KConsultation = memo(_Instant1KConsultation);
