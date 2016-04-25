import { fromJS } from 'immutable';

import createReducer from '../utils/create-reducer';

import { FIND_ORDERS_REQUEST, FIND_ORDERS_SUCCESS, FIND_ORDERS_FAILURE } from '../../client/scripts/actions/order-actions';

export const initialState = fromJS({
	orders: {},
	isFetching: false,
	error: null,
});

export const reducer = createReducer({
	[FIND_ORDERS_REQUEST](state, action) {
		return state.set('isFetching', true);
	},
	[FIND_ORDERS_SUCCESS](state, action) {
		return state
			.update('orders', orders => orders.merge(fromJS({ [action.payload.id]: action.payload.orders })))
			.set('isFetching', false);
	},
	[FIND_ORDERS_FAILURE](state, action) {
		return state
			.set('isFetching')
			.set('error', action.payload.error);
	},
}, initialState);
