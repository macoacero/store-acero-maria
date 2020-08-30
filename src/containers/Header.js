import { connect } from "react-redux";
import Header from "../components/Header";
import { getUser } from '../actions'

const mapStateToProps = (state) => ({
  hasError: state.loadingError,
  user: state.loadingUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLoadUser: () => dispatch(getUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)