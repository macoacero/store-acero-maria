import { connect } from "react-redux";
import RepoList from "../components/RepoList";
import { getRepos } from '../actions'

const mapStateToProps = (state) => ({
  products: state.products,
  hasError: state.loadingError,
  isLoading: state.loadingInProgress
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLoad:  () => dispatch(getRepos()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RepoList)