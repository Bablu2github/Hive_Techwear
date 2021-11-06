import API from '../../API';
import { addCartAction, fetchCartsAction, updateCartAction } from './actions';

const api = new API();

export const fetchCarts = () => {
	return (dispatch) => {
		return api.getCarts().then((carts) => {
			dispatch(fetchCartsAction(carts));
		});
	};
};

export const addCart = (addCartBody) => {
	return (dispatch) => {
		return api.addCart(addCartBody).then((cart) => {
			dispatch(addCartAction(cart));
		});
	};
};

export const updateCart = (updateCartBody, cartId) => {
	return (dispatch) => {
		return api.updateCart(updateCartBody, cartId).then((cart) => {
			dispatch(updateCartAction(cart));
		});
	};
};