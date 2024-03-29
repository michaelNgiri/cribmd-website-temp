import { useState, useCallback, SyntheticEvent, useMemo } from 'react';

import { Container } from 'react-bootstrap';

import S from 'src/styles/pages/faq/index.module.scss';
import { FAQs } from 'src/data';
import { QandA } from './_QandA.Index';
import { Box, Button, RevealOnScroll, SVGIcon, Anchor } from 'src/components';
import { FAQDataProps } from 'src/types';

const IndexMain = (): JSX.Element => {
  const [openFAQId, setOpenFAQId] = useState('');
  const [filteredCategory, setFilteredCategory] = useState<Record<keyof FAQDataProps, boolean>>(
    useMemo(
      () => ({
        generalInfo: false,
        pricingAndPlans: false,
        platformUsage: false,
        privacyAndSecurity: false
      }),
      []
    )
  );
  const noFilteredCategory = useCallback(() => {
    for (const [, value] of Object.entries(filteredCategory)) {
      if (value) {
        return false;
      }
    }

    return true;
  }, [filteredCategory])();

  const handleFilterCategoryClick = useCallback((e: SyntheticEvent<HTMLButtonElement>) => {
    setFilteredCategory((prevfilter) => {
      const target = e.target as HTMLButtonElement;
      const newFilter = { ...prevfilter };
      const { generalInfo, pricingAndPlans, privacyAndSecurity, platformUsage } = newFilter;

      switch (true) {
        case /general/i.test(target.textContent!):
          target.dataset.selected = '' + !generalInfo;
          newFilter.generalInfo = !generalInfo;
          break;
        case /pricing/i.test(target.textContent!):
          target.dataset.selected = '' + !pricingAndPlans;
          newFilter.pricingAndPlans = !pricingAndPlans;
          break;
        case /privacy/i.test(target.textContent!):
          target.dataset.selected = '' + !privacyAndSecurity;
          newFilter.privacyAndSecurity = !privacyAndSecurity;
          break;
        case /platform/i.test(target.textContent!):
          target.dataset.selected = '' + !platformUsage;
          newFilter.platformUsage = !platformUsage;
          break;
      }

      return newFilter;
    });
  }, []);

  const handleRenderFAQs = useCallback(
    (data) => (
      <QandA data={data} openFAQId={openFAQId} setOpenFAQId={setOpenFAQId} key={data.question} />
    ),
    [openFAQId]
  );

  return (
    <Container as="main" className={`${S.Main} shrink-max-width-xxl`}>
      <RevealOnScroll easing="ease">
        <Box as="p">Filter questions by category:</Box>
      </RevealOnScroll>

      <RevealOnScroll className={S.categoryButtonsWrapper} easing="ease" animName="fadeIn">
        <Box className={S.categoryButtonsContainer}>
          {useMemo(
            () => [
              'General Info ',
              'Pricing and Plans',
              ' Privacy and Security',
              ' Platform Usage'
            ],
            []
          ).map(
            useCallback(
              (text) => (
                <Button
                  color="tertiary"
                  variant="outlined"
                  onClick={handleFilterCategoryClick}
                  key={text}>
                  {text}
                  <SVGIcon name="tick" crop />
                </Button>
              ),
              [handleFilterCategoryClick]
            )
          )}
        </Box>
      </RevealOnScroll>

      {(noFilteredCategory || filteredCategory.generalInfo) && (
        <Box as="section" className={S.category}>
          <Box as="h2" className="h4">
            General Info
          </Box>

          {FAQs.generalInfo.map(handleRenderFAQs)}
        </Box>
      )}

      {(noFilteredCategory || filteredCategory.pricingAndPlans) && (
        <Box as="section" className={S.category}>
          <Box as="h2" className="h4">
            Pricing and Plans
          </Box>

          {FAQs.pricingAndPlans.map(handleRenderFAQs)}
        </Box>
      )}

      {(noFilteredCategory || filteredCategory.privacyAndSecurity) && (
        <Box as="section" className={S.category}>
          <Box as="h2" className="h4">
            Privacy and Security
          </Box>

          {FAQs.privacyAndSecurity.map(handleRenderFAQs)}
        </Box>
      )}

      {(noFilteredCategory || filteredCategory.platformUsage) && (
        <Box as="section" className={S.category}>
          <Box as="h2" className="h4">
            Platform Usage
          </Box>

          {FAQs.platformUsage.map(handleRenderFAQs)}
        </Box>
      )}

      <Box as="p" className="mt-5">
        Don’t see a Q&amp;A you’re looking for?
        <Anchor routeLink href="/faq/ask" className="ms-1">
          Ask us!
        </Anchor>
      </Box>
    </Container>
  );
};

export default IndexMain;
