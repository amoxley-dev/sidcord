import { connect } from 'react-redux';

import { createDmMessage } from '../../actions/dm_message_actions';
import CreateDmMessage from "./create_dm_message";

const mapStateToProps = state => {
  return {
    message: {
      body: ''
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createDmMessage: (dmServerId, dmMessage) => dispatch(createDmMessage(dmServerId, dmMessage))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateDmMessage);