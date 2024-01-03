import { useEffect, memo } from 'react';
import { Router } from 'next/dist/client/router';

const AppPageViewTracker = () => {
  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('557146978876278');
        ReactPixel.pageView();

        Router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView();
        });
      });
  }, []);

  return null;
};

export default memo(AppPageViewTracker);
