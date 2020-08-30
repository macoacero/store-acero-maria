import { connect } from "react-redux";
import ProductsList from "../components/ProductsList";
import { getProducts } from '../actions'

const mapStateToProps = (state) => ({
  products: state.loadingProducts,
  hasError: state.loadingError,
  isLoading: state.loadingInProgress,
  user: state.loadingUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLoadProd: () => dispatch(getProducts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsList)