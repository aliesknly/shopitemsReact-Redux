import {combineReducers} from 'redux'
//-- USER --//
import {default as userLoginStatusReducer} from './userReducers/userLoginStatusReducer'
import {default as userAuthStatusReducer} from './userReducers/userAuthStatusReducer'
import {default as userCheckAuthStatus} from './userReducers/userCheckAuthStatusReducer'
import {default as userLogoutStatusReducer} from './userReducers/userLogoutStatusReducer'
//--PROVIDER--//
import {default as providerReducer} from './providerReducers/providerReducer';
import {default as providerListStatusReducer} from './providerReducers/providerListStatusReducer';
import {default as providerAddStatusReducer} from './providerReducers/providerAddStatusReducer';
import {default as providerDeleteStatusReducer} from './providerReducers/providerDeleteStatusReducer';
import {default as providerUpdateStatusReducer} from './providerReducers/providerUpdateStatusReducer';
import {default as providerGetStatusReducer} from './providerReducers/providerGetStatusReducer';
//--MEASURE--//
import {default as measureReducer} from './measureReducers/measureReducer';
import {default as measureListStatusReducer} from './measureReducers/measureListStatusReducer';
import {default as measureAddStatusReducer} from './measureReducers/measureAddStatusReducer';
import {default as measureDeleteStatusReducer} from './measureReducers/measureDeleteStatusReducer';
import {default as measureUpdateStatusReducer} from './measureReducers/measureUpdateStatusReducer';
import {default as measureGetStatusReducer} from './measureReducers/measureGetStatusReducer';
//--PRODUCT--//
import {default as productReducer} from './productReducers/productReducer';
import {default as productListStatusReducer} from './productReducers/productListStatusReducer';
import {default as productAddStatusReducer} from './productReducers/productAddStatusReducer';
import {default as productDeleteStatusReducer} from './productReducers/productDeleteStatusReducer';
import {default as productUpdateStatusReducer} from './productReducers/productUpdateStatusReducer';
import {default as productGetStatusReducer} from './productReducers/productGetStatusReducer';
import {default as productFormReducer} from './productReducers/productFormReducer';
//--ORDER--//
import {default as orderReducer} from './orderReducers/orderReducer';
import {default as orderListStatusReducer} from './orderReducers/orderListStatusReducer';
import {default as orderAddStatusReducer} from './orderReducers/orderAddStatusReducer';
import {default as orderDeleteStatusReducer} from './orderReducers/orderDeleteStatusReducer';
//--CHECKOUT--//
import {default as checkoutReducer} from './checkoutReducers/checkoutReducer';
import {default as checkoutListStatusReducer} from './checkoutReducers/checkoutListStatusReducer';
import {default as checkoutAddStatusReducer} from './checkoutReducers/checkoutAddStatusReducer';
import {default as checkoutDeleteStatusReducer} from './checkoutReducers/checkoutDeleteStatusReducer';
import {default as checkoutGetStatusReducer} from './checkoutReducers/checkoutGetStatusReducer';
import {default as checkoutSendStatusReducer} from './checkoutReducers/checkoutSendStatusReducer';
//--MESSAGE--//
import {default as messageReducer} from './messageReducers/messageReducer';
import {default as messageLoadStatusReducer} from './messageReducers/messageLoadStatusReducer';
import {default as messageClearStatusReducer} from './messageReducers/messageClearStatusReducer';

const rootReducers = combineReducers({
    //USER
    userLoginStatusReducer,
    userAuthStatusReducer,
    userCheckAuthStatus,
    userLogoutStatusReducer,
    //PROVIDER
    providerReducer,
    providerListStatusReducer,
    providerAddStatusReducer,
    providerDeleteStatusReducer,
    providerUpdateStatusReducer,
    providerGetStatusReducer,
    //MEASURE
    measureReducer,
    measureListStatusReducer,
    measureAddStatusReducer,
    measureDeleteStatusReducer,
    measureUpdateStatusReducer,
    measureGetStatusReducer,
    //Product
    productReducer,
    productListStatusReducer,
    productAddStatusReducer,
    productDeleteStatusReducer,
    productUpdateStatusReducer,
    productGetStatusReducer,
    productFormReducer,
    //Order
    orderReducer,
    orderListStatusReducer,
    orderAddStatusReducer,
    orderDeleteStatusReducer,
    //Checkout
    checkoutReducer,
    checkoutListStatusReducer,
    checkoutAddStatusReducer,
    checkoutDeleteStatusReducer,
    checkoutGetStatusReducer,
    checkoutSendStatusReducer,
    //Message
    messageReducer,
    messageLoadStatusReducer,
    messageClearStatusReducer,
});

export default rootReducers;