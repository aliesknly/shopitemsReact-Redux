import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types'
//Actions
import {productModal} from "../../../actions";
//Components
import {Button} from 'reactstrap';

class ProductAdd extends Component {
    toggle = () => {
        this.props.productModal()
    };

    render() {
        return (
            <div>
                <Button color={'info'} onClick={this.toggle}><strong>+</strong></Button>
            </div>
        );
    }
}

ProductAdd.propTypes = {
    productModal: PropTypes.func.isRequired
};

const mapDispatchToProps = {
    productModal
};
export default connect(null, mapDispatchToProps)(ProductAdd);
