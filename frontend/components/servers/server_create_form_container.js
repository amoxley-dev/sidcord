import { connect } from "react-redux";

import { createServer, fetchServer } from "../../actions/server_actions";
import ServerCreateForm from "./server_create_form";
import { closeModal } from "../../actions/modal_actions";



const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.server
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createServer: server => dispatch(createServer(server)),
    closeModal: () => dispatch(closeModal)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerCreateForm);