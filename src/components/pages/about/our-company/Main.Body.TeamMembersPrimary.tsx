import { memo, useContext, useCallback } from 'react';

import { Box, RevealOnScroll, Avatar, LazyBox, Anchor, SVGIcon } from 'src/components/shared';
import S from 'src/styles/pages/about/our-company/index.module.scss';
import { teamMembersPrimary } from 'src/data';
import { GetImage, getHumanName } from 'src/utils';
import { AppWindowContext, AppModalContext } from 'src/pages/_app';

const MainBodyTeamMembersPrimary = (): JSX.Element => {
  const { handleDisplayModal } = useContext(AppModalContext);
  const windowWidth = useContext(AppWindowContext);

  const handleViewMemberClick = useCallback(
    ({ imageName, primaryBio, secondaryBio, role, skill }) =>
      () =>
        handleDisplayModal!({
          displayModal: true,
          centered: false,
          modalClassName: 'team-member-modal',
          header: (
            <Box className="d-flex">
              <Avatar
                noFrame
                size="tiny"
                src={GetImage.teamMembersPrimary(imageName)}
                alt={imageName}
              />
              <Box className="flex-column ms-3">
                <Box as="h6" className="my-0">
                  {getHumanName(imageName)}
                  {/* <SVGIcon name="arrow-top-right" size="inherit" /> */}
                </Box>
                <Box as="small" className="d-block theme-tertiary mb-0 mt-1 lh-base">
                  {role} | {skill}
                </Box>
              </Box>
            </Box>
          ),
          body: (
            <Box className={`${S.modalContent} secondary-content m-0`}>
              {primaryBio}
              <br></br>
              {secondaryBio}
              {/* <a
                  className={S.linkd}
                  href="https://www.linkedin.com/in/ngiriuchechukwu"
                  target="_blank"
                  rel="noreferrer">
                  visit profile
                </a> */}
            </Box>
          )
        }),
    [handleDisplayModal]
  );

  return (
    <LazyBox className={S.teamGrid}>
      {teamMembersPrimary.map(
        useCallback(
          ({ imageName, primaryBio, secondaryBio, role }, i) => (
            <RevealOnScroll
              key={imageName + i}
              className={`${
                i === 0 ? 'order-1 order-md-0' : i > 1 ? 'order-2' : 'order-0'
              } text-center`}
              delay={(i % 3) * 0.125}
              easing="ease"
              allowOverflow
              animName="fadeInLeft">
              <Box className={`${S.teamMemberContainer}`}>
                {(primaryBio || secondaryBio) && (
                  <Anchor onClick={handleViewMemberClick(teamMembersPrimary[i])}>
                    <SVGIcon name="double-arrow" size="tiny" />
                  </Anchor>
                )}
                <Avatar
                  isJPG
                  size={windowWidth < 576 ? 'small' : 'medium'}
                  src={GetImage.teamMembersPrimary(imageName)}
                  alt="team member image"
                />
                <Box className={`${S.ourTeamContent} mb-auto`}>
                  <Box as="strong" className="mt-2 mt-md-4 mb-2 h6">
                    {getHumanName(imageName)}
                  </Box>
                  <Box as="small" className="d-inline-block theme-tertiary">
                    {role}
                  </Box>
                </Box>
              </Box>
            </RevealOnScroll>
          ),
          [windowWidth, handleViewMemberClick]
        )
      )}
    </LazyBox>
  );
};

export default memo(MainBodyTeamMembersPrimary);
