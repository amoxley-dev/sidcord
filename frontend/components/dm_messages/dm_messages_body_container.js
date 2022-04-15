import { connect } from "react-redux";
import { updateDmMessage, deleteDmMessage } from "../../actions/dm_message_actions";
import BodyDmMessage from "./body_dm_message";

const mapStateToProps = state => {
  return {
    currentUserId: state.session.id
  }
};

const mapDispatchToProps = dispatch => {
  return {
    updateDmMessage: dmMessage => dispatch(updateDmMessage(dmMessage)),
    deleteDmMessage: dmMessageId => dispatch(deleteDmMessage(dmMessageId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BodyDmMessage)