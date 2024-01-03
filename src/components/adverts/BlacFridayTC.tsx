import { FC, memo, useMemo } from 'react';
import { Box } from 'src/components/shared';

export const renderListItem = (text: string): JSX.Element => (
  <Box as="li" key={text}>
    {text}
  </Box>
);

const _BlackFridayTC: FC<{ header: string }> = ({ header }) => {
  console.log(header);
  return (
    <Box className={`Advert ContactSupport`}>
      <Box as="main" className="">
        <Box className="intro-texts">
          <Box as="ol">
            {useMemo(
              () => [
                'No rollover for services. Services have to be used within the specified time slated for the promo. Services purchased during the promo become null after the time frame for promo',
                'Purchases are to be made on the web-site or on the app. Transfers and other payment methods would not be accepted. ',
                'Hospital visits would come at added costs. Promo does not cover hospital visits or bookings.',
                'No refunds, exchanges or price adjustments on sales. Sales are final.',
                'No combination of discounts on one account. ',
                'Limited quantities for these deals. Would be on a first come first served basis'
              ],
              []
            ).map(renderListItem)}
          </Box>
          {header && header == 'Basic Plan' && (
            <>
              <Box as="p">Details</Box>
              <Box as="ol">
                {[
                  'No doctor house calls. There will be drug prescriptions and free drug deliveries when drugs are purchased from our pharmacy',
                  'Tele Sessions and urgent requests available. This is valid for one month. ',
                  'The 80% discount cuts across 6 months and non-renewal of subscription means forfeiting the incentive involved'
                ].map(renderListItem)}
              </Box>
            </>
          )}
          {header && (header == 'Family Plan' || header == 'Premium Plan') && (
            <>
              <Box as="p">Details</Box>
              <Box as="ol">
                {[
                  'Doctor House Call would be based on Doctor’s authorization only For teleconsultations; they are limited to general practice',
                  'No specialist consultations included. Drug prescriptions and delivery available when drugs are purchased from the pharmacy.  ',
                  'Optical and dental care not included. Hospital visits too.'
                ].map(renderListItem)}
              </Box>
            </>
          )}
          {header && header == 'Exclusive Plan' && (
            <>
              <Box as="p">Details</Box>
              <Box as="ol">
                {[
                  'Drug prescriptions and free delivery of drugs when purchased  from our pharmacy. ',
                  'No lab investigations. ',
                  'Unlimited urgent requests/teleconsultations',
                  'Doctor house calls are subject to prior authorization from CribMD doctors. '
                ].map(renderListItem)}
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export const BlackFridayTC = memo(_BlackFridayTC);
