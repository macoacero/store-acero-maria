import { connect } from "react-redux";
import History from "../components/History";
import { getHistory } from '../actions'

const mapStateToProps = (state) => ({
  history: state.loadingHistory,
  hasError: state.loadingError,
  isLoading: state.loadingInProgress,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLoadHistory: () => dispatch(getHistory()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(History)