import { memo, MouseEvent, FC, useCallback, Dispatch, SetStateAction } from 'react';

import { preventDefault } from 'src/utils';
import { Box, Anchor } from '.';
import { NavLink, SVGIcon } from './shared';
import { navAboutMenu } from 'src/data';

const AppNavMenu: FC<{
  openMenuId: string;
  options: typeof navAboutMenu;
  anchorPathname: string;
  anchorName: string;
  handleNavLinkClick: (e: MouseEvent<HTMLElement>) => void;
  setOpenMenuId: Dispatch<SetStateAction<string>>;
}> = ({
  openMenuId,
  options,
  anchorPathname,
  anchorName,
  handleNavLinkClick: _handleNavLinkClick,
  setOpenMenuId
}) => {
  const openMenu = openMenuId === anchorName;

  const handleNavLinkClick = useCallback(
    (e) => {
      _handleNavLinkClick(e);
      setOpenMenuId('');
    },
    [_handleNavLinkClick, setOpenMenuId]
  );

  return (
    <>
      <NavLink
        button
        href={anchorPathname}
        color="tertiary"
        className={'AppNav__nav-link' + (openMenu ? ' dropdown' : '')}
        onClick={useCallback(
          (e) => {
            preventDefault()(e);
            setOpenMenuId((prev) => {
              if (!prev) {
                return anchorName;
              }

              return prev === anchorName ? '' : anchorName;
            });
          },
          [anchorName, setOpenMenuId]
        )}>
        {anchorName}
        <SVGIcon name="caret-down" className="ms-2 ms-lg-1" fontSize="0.75em" />
      </NavLink>

      <Box className="AppNav__menu">
        {options.map(({ href, icon, title, rider }) => (
          <Anchor
            routeLink
            href={
              (/about/.test(anchorPathname)
                ? /legal/.test(href)
                  ? ''
                  : '/about'
                : '/health-plans') + href
            }
            onClick={handleNavLinkClick}
            key={href}>
            <Box as="span">
              <SVGIcon name={icon} />
            </Box>

            <Box as="p">
              <Box as="span" className="h6 mt-0 mb-2">
                {title}
              </Box>
              {rider}
            </Box>
          </Anchor>
        ))}
      </Box>
    </>
  );
};

export default memo(AppNavMenu);
