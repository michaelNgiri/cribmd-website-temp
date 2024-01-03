import { FC, memo, useState, useCallback } from 'react';

import { Box, Img, Button } from 'src/components';
import { GetImage } from 'src/utils';
import Form from './Form';

const _FreeConsultation: FC = () => {
  const [isViewingForm, setIsViewingForm] = useState(!true);

  const handleConnectWithADoctorClick = useCallback(() => {
    setIsViewingForm(true);
  }, []);

  return (
    <Box className={`Advert FreeConsultation`}>
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
        <Box as="h2" className="h3 mt-2 anim__fadeInUp">
          New here?
          <br />
          <br />
          Get a free (one-time) 5-Minute <br /> Consultation with a Doctor today!
        </Box>

        <Box className="__sections-wrapper">
          {!isViewingForm ? (
            <Box as="section" key="intro" className="anim__fadeInUp anim__del--025s">
              <Box as="p" className="px-sm-4">
                We understand that you have questions regarding your health.
                <br />
                Talk to our health professionals for free now to get answers.
              </Box>

              <Box className="__body-action-card">
                <Box as="p" className="mt-0 mb-4 px-sm-4 fw-bold">
                  Click the button below to talk to a CribMD Doctor now
                </Box>
                <Button color="tertiary" variant="outlined" onClick={handleConnectWithADoctorClick}>
                  Connect with a Doctor
                </Button>
              </Box>
            </Box>
          ) : (
            <Form />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export const FreeConsultation = memo(_FreeConsultation);
