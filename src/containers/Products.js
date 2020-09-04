import { connect } from "react-redux";
import ProductsList from "../components/ProductsList";
import { getProducts, redeemProduct } from '../actions'

const mapStateToProps = (state) => ({
  products: state.loadingProducts,
  hasError: state.loadingError,
  isLoading: state.loadingInProgress,
  user: state.loadingUser,
  productId: state.uploadRedeemProduct,
  errorRed: state.errorRedeem,
  points: state.uploadPoint
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onLoadProd: () => dispatch(getProducts()),
  onClickRedeem: (productId) => dispatch(redeemProduct(productId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductsList)