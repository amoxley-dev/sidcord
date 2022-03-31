import { connect } from "react-redux";
import { updateMessage } from "../../actions/message_action";
import MessageBody from "./message_body";

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {
  return {
    updateMessage: message => dispatch(updateMessage(message))
  }
}

export default connect(null, mapDispatchToProps)(MessageBody)