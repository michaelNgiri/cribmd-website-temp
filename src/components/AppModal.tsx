/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { memo, useCallback, FC, useContext } from 'react';

import { Modal } from 'react-bootstrap';

import { Button, SVGIcon } from './shared';
import { AppModalContext } from 'src/pages/_app';

const AppModal: FC = () => {
  const { header, body, footer, modalClassName, displayModal, centered, handleDisplayModal } =
    useContext(AppModalContext);

  const handleCloseModal = useCallback(() => {
    handleDisplayModal!({ displayModal: false });
  }, [handleDisplayModal]);

  return (
    <Modal
      show={displayModal}
      onHide={handleCloseModal}
      centered={centered}
      scrollable
      restoreFocus
      enforceFocus
      fullscreen="sm-down"
      className={`AppModal ${modalClassName || ''}`}>
      <Modal.Header>
        {header}
        <Button _type="icon-button" className="modal-close-btn ms-auto" onClick={handleCloseModal}>
          <SVGIcon name="times" />
        </Button>
      </Modal.Header>
      {body && <Modal.Body className="custom-scroll-bar">{body}</Modal.Body>}
      {footer && <Modal.Footer>{footer}</Modal.Footer>}
    </Modal>
  );
};

export default memo(AppModal);
