import { connect } from "react-redux";
import Header from "../components/Header";
import { getUser, addPoints } from '../actions'

const mapStateToProps = (state) => ({
  user: state.loadingUser,
  points: state.uploadPoint
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLoadUser: () => dispatch(getUser()),
  loadPoints: (points) => dispatch(addPoints(points)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)