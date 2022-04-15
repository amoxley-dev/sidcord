import { connect } from 'react-redux';

import { fetchDmServer } from '../../actions/dm_server_actions';
import { createDmMessage, updateDmMessage } from '../../actions/dm_message_actions';
import DmMessages from "./dm_messages";

const mapStateToProps = state => {
  return {
    dmMessages: Object.values(state.entities.dmMessages),
    currentUser: state.entities.users[state.session.id]
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDmServer: dmServerId => dispatch(fetchDmServer(dmServerId)),
    createDmMessage: (dmServerId, dmMessage) => dispatch(createDmMessage(dmServerId, dmMessage)),
    updateDmMessage: dmMessage => dispatch(updateDmMessage(dmMessage))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DmMessages)