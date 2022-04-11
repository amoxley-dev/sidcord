import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import { closeModal } from '../../actions/modal_actions';
import ServerFormContainer from '../servers/server_form_container';
import ServerPublicContainer from '../servers/server_public_form_container';
import ServerIndexContainer from '../servers/server_index_container';
import ServerEditContainer from '../servers/server_edit_container';
import ServerCreateFormContainer from '../servers/server_create_form_container';
import UserOptionsContainer from '../user/user_options_container';
import CreateChannelContainer from '../channels/create_channel_container';
import ChannelEditContainer from '../channels/edit_channel_container';

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      serverPublic: false
    }

    this.publicTrue = this.publicTrue.bind(this);
    this.publicFalse = this.publicFalse.bind(this);
    
  }
  

  publicTrue() {
    this.setState({serverPublic: true});
  }

  publicFalse() {
    this.setState({serverPublic: false});
  }

  
  render() {
    let component;
    // console.log(this.props)
    switch (this.props.modal) {
      case 'serverForm':
        component = <ServerFormContainer />;
        break;
      case 'serverPublicForm':
        component = <ServerPublicContainer 
                      serverPublic={this.state.serverPublic}
                      publicTrue={this.publicTrue}
                      publicFalse={this.publicFalse}
                    />;
        break;
      case 'serverCreate':
        component = <ServerCreateFormContainer
                      serverPublic={this.state.serverPublic}
                    />;
        break;
      case 'serverIndex':
        component = <ServerIndexContainer />
        break;
      case 'serverEdit':
        component = <ServerEditContainer history={this.props.history}/>
        break;
      case 'userOptions':
        component = <UserOptionsContainer />
        break;
      case 'createChannel':
        component = <CreateChannelContainer />
        break;
      case 'editChannel':
        component = <ChannelEditContainer history={this.props.history}/>
        break;
      default:
        return null;
    }

    if (!this.props.modal) {
      return null;
    }

    return (
      <div className="modal-background" onClick={this.props.closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          { component }
        </div>
      </div>
    );
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Modal));