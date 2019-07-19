import Login from '../pages/login';
import Provider from '../pages/provider';
import Measures from '../pages/measures';
import Products from '../pages/products';
import Buy from '../pages/buy';
import Order from '../pages/order';


export default [
    {
        title:"Login",
        url:"/login",
        component:Login,
        protected: false
    },{
        title:"Provider",
        url:"/provider",
        component:Provider,
        protected: true
    },{
        title:"Measures",
        url:"/measure",
        component:Measures,
        protected: true
    },{
        title:"Products",
        url:"/products",
        component:Products,
        protected: true
    },{
        title: "Buy",
        url: "/buy",
        component: Buy,
        protected: true
    },{
        title: "Order",
        url: "/order",
        component: Order,
        protected: true
    },
];