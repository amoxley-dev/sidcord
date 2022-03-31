import { connect } from "react-redux";
import { updateMessage, deleteMessage } from "../../actions/message_action";
import MessageBody from "./message_body";

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {
  return {
    updateMessage: message => dispatch(updateMessage(message)),
    deleteMessage: messageId => dispatch(deleteMessage(messageId))
  }
}

export default connect(null, mapDispatchToProps)(MessageBody)