import { memo, useCallback } from 'react';

import { LazyBox, Box, Anchor } from 'src/components';

const tableOfContents = [
  'AGREEMENT TO TERMS',
  'INTELLECTUAL PROPERTY RIGHTS',
  'USER REPRESENTATIONS',
  'USER REGISTRATION',
  'PROHIBITED ACTIVITIES',
  'USER GENERATED CONTRIBUTIONS',
  'CONTRIBUTION LICENSE',
  'GUIDELINES FOR REVIEWS',
  {
    heading: 'MOBILE APPLICATION LICENSE',
    subSections: ['Use License', 'Apple and Android Devices']
  },
  'SOCIAL MEDIA',
  'SUBMISSIONS',
  'THIRD-PARTY WEBSITES AND CONTENT',
  'SITE MANAGEMENT',
  'HEALTH POLICY',
  'PRIVACY POLICY',
  'TERM AND TERMINATION',
  'MODIFICATIONS AND INTERRUPTIONS',
  'UPDATES TO OUR WEBSITE/APP',
  'UPDATES TO OUR TERMS',

  'GOVERNING LAW',
  {
    heading: 'DISPUTE RESOLUTION',
    subSections: [
      'Informal Negotiations',
      'Binding Arbitration',
      'Restrictions',
      'Exceptions to Informal Negotiations and Arbitration'
    ]
  },
  'CORRECTIONS',
  'TYPOGRAPHICAL ERRORS',
  'DISCLAIMER',
  'LIMITATIONS OF LIABILITY',
  'INDEMNIFICATION',
  'USER DATA',
  'ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES',
  'MISCELLANEOUS',
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

              return (
                <Box as="li" key={text.heading + i}>
                  <Anchor href={`#${text.heading.replace(/\s|,/g, '-').toLowerCase()}`}>
                    {text.heading}
                  </Anchor>

                  <Box as="ol">
                    {text.subSections.map((_text) => (
                      <Box as="li" key={_text + i}>
                        {_text}
                      </Box>
                    ))}
                  </Box>
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
