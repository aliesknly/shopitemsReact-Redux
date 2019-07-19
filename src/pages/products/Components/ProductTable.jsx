import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
//Components
import {CardColumns, Spinner} from 'reactstrap';
import ProductItem from './ProductItem';
//Actions
import {measureListRequest, productListRequest, providerListRequest} from "../../../actions";

class ProductTable extends Component {
    componentDidMount = () => {
        this.props.productListRequest();
        this.props.measureListRequest();
        this.props.providerListRequest();
    };

    render() {
        const {loadingList, list} = this.props;
        return (
            (loadingList && <Spinner color={'primary'}/>) ||
            <CardColumns>
                {list.map((item, key) => (
                    <ProductItem key={key} no={key + 1} item={item}/>
                ))}
            </CardColumns>

        );
    }
}

ProductTable.propTypes = {
    list: PropTypes.array.isRequired,
    loadingList: PropTypes.bool.isRequired,
    productListRequest: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
    list: state.productReducer.list,
    loadingList: state.productListStatusReducer.loading,
});

const mapDispatchToProps = {
    productListRequest,
    measureListRequest,
    providerListRequest,
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductTable);
