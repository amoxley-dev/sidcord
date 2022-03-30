import { connect } from "react-redux";

import { createMessage } from "../../actions/message_action";
import ChannelMessageCreate from "./channel_message_create";

const mapStateToProps = state => {
  return {
    message: {
      body: ''
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createMessage: (channelId, message) => dispatch(createMessage(channelId, message))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelMessageCreate)

