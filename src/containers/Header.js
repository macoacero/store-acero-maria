import { connect } from "react-redux";
import Header from "../components/Header";
import { getUser, addPoints } from '../actions'

const mapStateToProps = (state) => ({
  hasError: state.loadingError,
  user: state.loadingUser,
  points: state.uploadPoint
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLoadUser: () => dispatch(getUser()),
  handleChangePoints: () => dispatch(addPoints()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)