import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
//Components
import {Button} from 'reactstrap';
//Actions
import {productEdit, productGetRequest} from "../../../actions";
//Components
import {FaPencilAlt} from "react-icons/fa";

class ProductEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    toggle = () => {
        const {idItem, productGetRequest} = this.props;
        productGetRequest(idItem);
    };

    render() {
        return (
            <div>
                <Button color={'success'} size={'lg'} onClick={this.toggle}><FaPencilAlt/></Button>
            </div>
        );
    }
}

ProductEdit.propTypes = {
    productEdit: PropTypes.func.isRequired,
    productGetRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
    productEdit,
    productGetRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductEdit);
