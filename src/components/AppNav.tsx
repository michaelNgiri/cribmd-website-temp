import {
  useState,
  useCallback,
  useContext,
  useEffect,
  memo,
  AnimationEvent,
  MouseEvent
} from 'react';
import { useRouter } from 'next/dist/client/router';

import { AppWindowContext } from 'src/pages/_app';
import { addEventListenerOnce } from 'src/utils';
import { Box, Logo, Anchor, Button } from '.';
import { NavLink } from './shared';
import { navPlansMenu, navAboutMenu, navRoutes } from 'src/data';
import AppNavMenu from './AppNav.Menu';

let scrollTimeout: NodeJS.Timeout;
let scrollPositionTimeout: NodeJS.Timeout;
let initialScrollPosition = 0;
let finalScrollPosition = 0;

const AppNav = (): JSX.Element => {
  const windowWidth = useContext(AppWindowContext);
  const isPC = windowWidth > 991 && typeof window !== 'undefined';
  const [openSideNav, setOpenSideNav] = useState(false);
  const [renderNav, setRenderNav] = useState(isPC);
  const [isNegativeScroll, setIsNegativeScroll] = useState(isPC);
  const [hasReachedScrollThreshold, setHasReachedScrollThreshold] = useState(!isPC);
  const [openMenuId, setOpenMenuId] = useState('');
  const router = useRouter();
  const onLanding = /^\/(home)?$/.test(router.pathname);

  const handleNavLinkClick = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      if (!isPC) {
        return setOpenSideNav((prev) => !prev);
      }

      setOpenMenuId('');
      e.currentTarget.blur();
    },
    [isPC]
  );

  const handleNavAnimationEnd = useCallback(
    (e: AnimationEvent<HTMLUListElement>) => {
      const self = e.target as HTMLElement;

      // prevent event bubbling
      if (!/nav-links-container/.test(self.className)) {
        return;
      }

      setRenderNav(isPC ? isNegativeScroll : openSideNav);
    },
    [isPC, openSideNav, isNegativeScroll]
  );

  const clearScrollTimeout = useCallback(() => {
    clearTimeout(scrollTimeout);
  }, []);

  const handleWindowScroll = useCallback(() => {
    clearScrollTimeout();
    scrollTimeout = setTimeout(() => {
      clearTimeout(scrollPositionTimeout);
      initialScrollPosition = window.scrollY || window.pageYOffset;
      scrollPositionTimeout = setTimeout(() => {
        finalScrollPosition = initialScrollPosition;
        setHasReachedScrollThreshold(
          finalScrollPosition < (isPC ? 110 : 55) || window.scrollY < 55
        );
      }, 25);

      if (isPC) {
        const isNegativeScroll = initialScrollPosition - finalScrollPosition < 0;

        setIsNegativeScroll(isNegativeScroll);

        if (isNegativeScroll) {
          setRenderNav(true);
        }
      }
    }, 25);
  }, [clearScrollTimeout, isPC]);

  const renderRoutes = useCallback(
    (route) => {
      const [name, pathname, preventsDefault] = route.split('|');

      return (
        <>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-58SQXH9" height="0" width="0" style="display: none; visibility: hidden;" />`
            }}
          />
          <Box as="li" className="mx-lg-1" key={name}>
            {!preventsDefault ? (
              <NavLink
                button
                exact={!/faq/.test(pathname)}
                href={pathname}
                color="tertiary"
                className="AppNav__nav-link"
                onClick={handleNavLinkClick}>
                {name}
              </NavLink>
            ) : (
              <AppNavMenu
                openMenuId={openMenuId}
                anchorName={name}
                anchorPathname={pathname}
                options={/about/.test(pathname) ? navAboutMenu : navPlansMenu}
                handleNavLinkClick={handleNavLinkClick}
                setOpenMenuId={setOpenMenuId}
              />
            )}
          </Box>
        </>
      );
    },
    [handleNavLinkClick, openMenuId]
  );

  useEffect(() => {
    if (!isPC) {
      document.body.dataset.nav_open = String(openSideNav);
    } else {
      document.body.dataset.nav_open = String(!!openMenuId);
    }
  }, [openSideNav, openMenuId, isPC]);

  useEffect(() => {
    if (isPC) {
      document.body.dataset.positive_scroll = '' + !isNegativeScroll;
    }
  }, [isNegativeScroll, isPC]);

  useEffect(() => {
    addEventListenerOnce(window, handleWindowScroll, 'scroll', {
      passive: true,
      once: false
    });

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, [handleWindowScroll]);

  useEffect(() => {
    if (router.pathname) {
      setHasReachedScrollThreshold(true);
    }
  }, [router.pathname]);

  return (
    <Box
      as="nav"
      dynamic
      className={`AppNav ${
        isPC
          ? !onLanding && hasReachedScrollThreshold
            ? 'transparentize-ul-bg'
            : ''
          : hasReachedScrollThreshold
          ? 'transparentize-ul-bg'
          : ''
      } custom-scroll-bar shrink-max-width-xxl px-3 py-sm-2 py-lg-3 mb-3 mx-auto mb-lg-4 container`}>
      <Logo className={`${isPC ? (isNegativeScroll ? '' : 'lighten') : ''} me-2`} />

      {!isPC && (renderNav || openSideNav) && (
        <Box
          className={`AppNav__underlay d-lg-none anim__dur--05s ${
            !openSideNav ? 'anim__OutRightBig' : 'anim__InRightBig'
          }`}
        />
      )}

      {(renderNav || openSideNav) && (
        <Box
          as="ul"
          className={`AppNav__nav-links-container px-2 px-sm-3 px-lg-2 pb-5 pb-lg-2 pt-lg-2 mx-auto ${
            isPC
              ? isNegativeScroll
                ? 'anim__fadeInDown anim__dur--025s'
                : 'anim__fadeOutUp'
              : !openSideNav
              ? 'anim__fadeOut anim__dur--025s'
              : 'anim__fadeIn anim__del--025s anim__dur--05s'
          }`}
          onAnimationEnd={handleNavAnimationEnd}>
          {navRoutes.map(renderRoutes)}

          <Box as="li" className="d-block d-lg-none mt-4 pt-3 mx-lg-1">
            <Anchor
              button
              color="tertiary"
              className="AppNav__nav-link"
              href="https://app.cribmd.com/login">
              Log in
            </Anchor>
          </Box>
        </Box>
      )}

      <Box as="ul" className="AppNav__ctas-container p-lg-2 ms-2">
        {isPC && (
          <Box as="li">
            <Anchor
              button
              color="tertiary"
              className="AppNav__cta--text AppNav__nav-link btn--text"
              href="https://app.cribmd.com/login">
              Log in
            </Anchor>
          </Box>
        )}

        <Box as="li">
          <Anchor
            button
            variant={windowWidth < 768 ? 'outlined' : 'contained'}
            color="primary"
            className="AppNav__nav-link ms-0 ms-lg-2 white-space-nowrap"
            href="https://app.cribmd.com/signup">
            Sign up
          </Anchor>
        </Box>

        <Box as="li">
          <Button
            aria-label="menu button"
            className="AppNav__menu-button AppNav__nav-link d-inline-flex d-lg-none btn--text ms-2 ms-sm-2 px-2"
            onClick={handleNavLinkClick}>
            <Box as="span" className="custom-bars-wrapper mx-1">
              <Box as="span"></Box>
              <Box as="span"></Box>
              <Box as="span"></Box>
            </Box>
          </Button>
        </Box>
      </Box>

      <Box
        className={`AppNav__Menu-clickaway-backdrop anim__fadeIn d-none d-lg-block anim__fade${
          openMenuId ? 'In' : 'Out pointer-events-none'
        }`}
        onClick={() => setOpenMenuId('')}
      />
    </Box>
  );
};

export default memo(AppNav);
