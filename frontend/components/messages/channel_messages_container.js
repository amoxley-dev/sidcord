import { connect } from "react-redux";

import { fetchChannel } from "../../actions/channel_actions";
import { createMessage } from "../../actions/message_action";
import ChannelMessages from "./channelMessages";

const mapStateToProps = state => {
  return {
    messages: Object.values(state.entities.messages),
    users: state.entities.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchChannel: channelId => dispatch(fetchChannel(channelId)),
    createMessage: (channelId, message) => dispatch(createMessage(channelId, message))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelMessages)