import { connect } from "react-redux";
import { createServer } from "../../actions/server_actions";
import ServerForm from "./server_form";

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.server
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createServer: server => dispatch(createServer(server))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerForm);