import React from 'react';
import { connect } from 'react-redux';

import { closeModal } from '../../actions/modal_actions';
import ServerFormContainer from '../servers/server_form_container';
import ServerPublicContainer from '../servers/server_public_form_container';
import ServerCreateFormContainer from '../servers/server_create_form_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }

  let serverPublic = false;

  const publicTrue = () => {
    serverPublic = true;
  }

  const publicFalse = () => {
    serverPublic = false;
  }

  let component;
  switch (modal) {
    case 'serverForm':
      component = <ServerFormContainer />;
      break;
    case 'serverPublicForm':
      component = <ServerPublicContainer 
                    serverPublic={serverPublic}
                    publicTrue={publicTrue}
                    publicFalse={publicFalse}
                  />;
      break;
    case 'serverCreate':
      component = <ServerCreateFormContainer
                    serverPublic={serverPublic}
                  />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);