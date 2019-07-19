import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
//Components
import BuyItem from "./BuyItem";
import {Spinner} from 'reactstrap';
//Actions
import {productListRequest, orderAddRequest} from "../../../actions";

class BuyList extends Component {
    componentDidMount = () => {
        this.props.productListRequest();
    };

    render() {
        const {list, loadingList, orderAddRequest} = this.props;
        return (
            <div style={styles.container}>
                {(loadingList && <Spinner color={'danger'}/>) ||
                list.map((item, key) => (
                    <BuyItem
                        key={key}
                        style={styles.box}
                        item={item}
                        orderAddRequest={orderAddRequest}
                    />
                ))
                }
            </div>
        );
    }
}

BuyList.propTypes = {
    list: PropTypes.array.isRequired,
    //-----------------------
    loadingList: PropTypes.bool.isRequired,
    //-----------------------
    productListRequest: PropTypes.func.isRequired,
    orderAddRequest: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
    list: state.productReducer.list,
    loadingList: state.productListStatusReducer.loading,
});

const mapDispatchToProps = {
    productListRequest,
    orderAddRequest,
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    box: {
        marginTop: '10px'
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BuyList);
