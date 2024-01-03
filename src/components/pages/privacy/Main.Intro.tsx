import { memo, useCallback } from 'react';

import { LazyBox, Box, Anchor } from 'src/components';

const tableOfContents = [
  'DEFINITION AND KEY TERMS',
  'WHAT INFORMATION DO WE COLLECT?',
  'HOW DO WE USE THE INFORMATION WE COLLECT?',
  'WHEN DOES CRIBMD USE END USER INFORMATION FROM THIRD PARTIES?',
  'WHEN DOES CRIBMD USE CUSTOMER INFORMATION FROM THIRD PARTIES?',
  'DO WE SHARE THE INFORMATION WE COLLECT WITH THIRD PARTIES?',
  'WHERE AND WHEN IS INFORMATION COLLECTED FROM CUSTOMERS AND END USERS?',
  'HOW DO WE USE YOUR EMAIL ADDRESS?',
  'HOW LONG DO WE KEEP YOUR INFORMATION?',
  'HOW DO WE PROTECT YOUR INFORMATION?',
  'COULD MY INFORMATION BE TRANSFERRED TO OTHER COUNTRIES?',
  'IS THE INFORMATION COLLECTED THROUGH THE CRIBMD SERVICE SECURE?',
  'CAN I UPDATE OR CORRECT MY INFORMATION?',
  'PERSONNEL',
  'SALE OF BUSINESS',
  'AFFILIATES',
  'GOVERNING LAW',
  'YOUR CONSENT',
  'LINKS TO OTHER WEBSITES',
  'COOKIES',
  'BLOCKING AND DISABLING COOKIES AND SIMILAR TECHNOLOGIES',
  'PAYMENT DETAILS',
  'KIDS PRIVACY',
  'CHANGES TO OUR PRIVACY POLICY',
  'THIRD-PARTY SERVICES',
  'TRACKING TECHNOLOGIES',
  'INFORMATION ABOUT GENERAL DATA PROTECTION REGULATION(GDRP)',
  'WHAT IS GDRP?',
  'WHAT IS PERSONAL DATA?',
  'WHY IS GDRP IMPORTANT?',
  'INDIVIDUAL DATA SUBJECT RIGHTS - DATA ACCESS, PORTABILITY AND DELETION?',
  'CALIFORNIA RESIDENTS',
  'CALIFORNIA ONLINE PRIVACY PROTECTION ACT (CalOPPA)',
  'CONTACT US'
];

const MainIntro = (): JSX.Element => {
  return (
    <>
      <LazyBox as="section" id="table-of-contents">
        <Box as="h2">Table of Contents</Box>

        <Box as="ol">
          {tableOfContents.map(
            useCallback((text, i) => {
              if (typeof text === 'string')
                return (
                  <Box as="li" key={text + i}>
                    <Anchor href={`#${text.replace(/\s|,/g, '-').toLowerCase()}`}>{text}</Anchor>
                  </Box>
                );
            }, [])
          )}
        </Box>
      </LazyBox>
    </>
  );
};

export default memo(MainIntro);
