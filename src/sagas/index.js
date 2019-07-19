import {spawn} from 'redux-saga/effects';
//-- USER --//
import loginSaga from './userSagas/loginSaga';
import checkAuthSaga from './userSagas/checkAuthSaga';
import logoutSaga from './userSagas/logoutSaga';
//--PROVIDER--//
import providerListSaga from './providerSagas/providerListSaga'
import providerAddSaga from './providerSagas/providerAddSaga'
import providerDeleteSaga from './providerSagas/providerDeleteSaga'
import providerUpdateSaga from './providerSagas/providerUpdateSaga'
import providerGetSaga from './providerSagas/providerGetSaga'
//--MEASURE--//
import measureListSaga from './measureSagas/measureListSaga'
import measureAddSaga from './measureSagas/measureAddSaga'
import measureDeleteSaga from './measureSagas/measureDeleteSaga'
import measureUpdateSaga from './measureSagas/measureUpdateSaga'
import measureGetSaga from './measureSagas/measureGetSaga'
//--PRODUCT--//
import productListSaga from './productSagas/productListSaga'
import productAddSaga from './productSagas/productAddSaga'
import productDeleteSaga from './productSagas/productDeleteSaga'
import productUpdateSaga from './productSagas/productUpdateSaga'
import productGetSaga from './productSagas/productGetSaga'
//--ORDER--//
import orderListSaga from './orderSagas/orderListSaga'
import orderAddSaga from './orderSagas/orderAddSaga'
import orderDeleteSaga from './orderSagas/orderDeleteSaga'
//--CHECKOUT--//
import checkoutListSaga from './checkoutSagas/checkoutListSaga'
import checkoutAddSaga from './checkoutSagas/checkoutAddSaga'
import checkoutDeleteSaga from './checkoutSagas/checkoutDeleteSaga'
import checkoutGetSaga from './checkoutSagas/checkoutGetSaga'
import checkoutSendSaga from './checkoutSagas/checkoutSendSaga'

const sagas = function* sagas() {
    //USER
    yield spawn(checkAuthSaga);
    yield spawn(loginSaga);
    yield spawn(logoutSaga);
    //PROVIDER
    yield spawn(providerListSaga);
    yield spawn(providerAddSaga);
    yield spawn(providerDeleteSaga);
    yield spawn(providerUpdateSaga);
    yield spawn(providerGetSaga);
    //MEASURE
    yield spawn(measureListSaga);
    yield spawn(measureAddSaga);
    yield spawn(measureDeleteSaga);
    yield spawn(measureUpdateSaga);
    yield spawn(measureGetSaga);
    //PRODUCT
    yield spawn(productListSaga);
    yield spawn(productAddSaga);
    yield spawn(productDeleteSaga);
    yield spawn(productUpdateSaga);
    yield spawn(productGetSaga);
    //ORDER
    yield spawn(orderListSaga);
    yield spawn(orderAddSaga);
    yield spawn(orderDeleteSaga);
    //CHECKOUT
    yield spawn(checkoutListSaga);
    yield spawn(checkoutAddSaga);
    yield spawn(checkoutDeleteSaga);
    yield spawn(checkoutGetSaga);
    yield spawn(checkoutSendSaga);
};

export default sagas