import React, {Component} from 'react';
import ProductTable from "./Components/ProductTable";
import ProductAdd from "./Components/ProductAdd";
import ProductForm from "./Components/ProductForm";

class Index extends Component {
    render() {
        return (
            <div>
                <h2>Products<ProductAdd/></h2>
                <ProductForm/>
                <ProductTable/>
            </div>
        );
    }
}

Index.propTypes = {};

export default Index;