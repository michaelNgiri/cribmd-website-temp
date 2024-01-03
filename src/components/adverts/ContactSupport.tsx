import { FC, memo } from 'react';
import { Box, SVGIcon, Anchor } from 'src/components/shared';

const _ContactSupport: FC = () => {
  return (
    <Box className={`Advert ContactSupport`}>
      <Box as="main" className="text-center">
        <Box as="h2" className="h3 mb-4">
          Contact Support
        </Box>

        <Box className="intro-texts">
          You can contact CribMD Support by either calling the phone number below or send an email
          by clicking ‘Send an email’ button.
        </Box>

        <Box as="section" className="__body-action-card">
          <Box>
            <Anchor
              href="tel:+2349060346075"
              button
              color="indigo"
              variant="contained"
              className="mx-2">
              +2349060346075 <SVGIcon name="phone" className="ms-3" size="tiny" />
            </Anchor>
            <Anchor
              href="mailto:support@cribmd.com?subject=CribMD%20Swift%20Health!&amp;body=I%20would%20like%20a%20consultation%20with%20a%20doctor%20on%20the%20SwiftHealth%20plan"
              button
              color="indigo"
              variant="contained"
              className="mt-2 mt-sm-0 mx-2">
              Send an email <SVGIcon name="mail" className="ms-3" size="tiny" />
            </Anchor>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export const ContactSupport = memo(_ContactSupport);
