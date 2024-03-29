import { memo, useMemo, useCallback } from 'react';
import { Box, RevealOnScroll, Avatar, LazyBox } from 'src/components/shared';
import S from 'src/styles/pages/about/our-company/index.module.scss';
import { advisorsData } from 'src/data';
import { GetImage } from 'src/utils';

const MainBodyAdvisors = (): JSX.Element => {
  return (
    <LazyBox className={S.teamMembersGrid}>
      {useMemo(() => advisorsData, []).map(
        useCallback(
          (advisor, i) => (
            <RevealOnScroll
              key={advisor.name + i}
              className={`${S.teamMember} my-2`}
              delay={(i % 5) * 0.1}>
              <Box className={`${S.teamMembersContent} ${S.ourTeamContent}`}>
                <Avatar
                  isJPG
                  elevation="1"
                  size="small"
                  src={GetImage.advisors(advisor.imageName)}
                  alt="team member image"
                />

                <Box as="strong" className="h6 mt-2 mb-0">
                  {advisor.name}
                </Box>
              </Box>
            </RevealOnScroll>
          ),
          []
        )
      )}
    </LazyBox>
  );
};

export default memo(MainBodyAdvisors);
