import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { closeModal } from "../../actions/modal_actions";
import UserOptions from "./user_options";


const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(null, mapDispatchToProps)(UserOptions);