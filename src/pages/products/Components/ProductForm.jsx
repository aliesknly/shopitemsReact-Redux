import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
//Components
import {
    Form, FormGroup, FormFeedback, Spinner, Input, Label, Button,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
//Actions
import {productModal, productAddRequest, productUpdateRequest} from "../../../actions";

class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            measure_id: '',
            provider_id: '',
            errors: []
        }
    }

    componentDidUpdate = (prevProps) => {
        const {edit, product} = this.props;
        if (prevProps.edit !== edit) {
            this.setState({
                name: product.name,
                measure_id: product.measure_id,
                provider_id: product.provider_id
            })
        }
    };

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({[name]: value});
    };

    dataClear = () => {
        this.setState({
            name: '',
            measure_id: '',
            provider_id: '',
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {errors, ...noerrors} = this.state;
        const result = this.validateForm(noerrors);
        this.setState({errors: result});

        if (!Object.keys(result).length) {
            const {
                productAddRequest, productUpdateRequest,
                edit, idItem
            } = this.props;
            if (edit) {
                productUpdateRequest(this.state, idItem);
                this.dataClear();
            } else {
                productAddRequest(this.state);
                this.dataClear();
            }
            e.target.reset();
        }
    };

    validateForm = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = "Field Name is required"
        }
        if (!values.measure_id) {
            errors.measure_id = "Field Measure is required"
        }
        if (!values.provider_id) {
            errors.provider_id = "Field Provider is required"
        }
        return errors;
    };

    toggle = () => {
        this.props.productModal();
    };

    render() {

        const {
            modal, edit, loadingGet,
            listMeasure, listProvider
        } = this.props;
        const {name, measure_id, provider_id, errors} = this.state;
        return (
            <Modal isOpen={modal} toggle={this.toggle}>
                <Form onSubmit={this.handleSubmit}>
                    <ModalHeader toggle={this.toggle}>
                        {(edit && 'Edit ') || 'Add '} Product
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label>Name</Label>
                            <Input name={'name'}
                                   onChange={this.handleChange}
                                   value={name || ''}
                                   placeholder={'Mango, Bacon, Tomatoes'}
                                   invalid={(errors.name && true) || false}/>
                            <FormFeedback>{errors.name}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label>Measure</Label>
                            {(loadingGet && <Spinner/>) ||
                            <Input type={'select'} name={'measure_id'}
                                   onChange={this.handleChange}
                                   value={measure_id || ''}
                                   invalid={errors.measure_id && true}>
                                <option value={''} disabled>Select one</option>
                                {listMeasure.map((item, key) => (
                                    <option value={item.id} key={key}>{item.name}</option>
                                ))}
                            </Input>
                            }
                            <FormFeedback>{errors.measure_id}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label>Provider</Label>
                            {(loadingGet && <Spinner/>) ||
                            <Input type={'select'} name={'provider_id'}
                                   onChange={this.handleChange}
                                   value={provider_id || ''}
                                   invalid={errors.provider_id && true}>
                                <option value={''} disabled>Select one</option>
                                {listProvider.map((item, key) => (
                                    <option value={item.id} key={key}>{item.shopname}</option>
                                ))}
                            </Input>
                            }
                            <FormFeedback>{errors.provider_id}</FormFeedback>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.toggle}>Cancel</Button>
                        <Button type={'submit'} color={'primary'}>Save</Button>
                    </ModalFooter>
                </Form>
            </Modal>
        )
            ;
    }
}

ProductForm.propTypes = {
    modal: PropTypes.bool,
    edit: PropTypes.bool,
    loadingGet: PropTypes.bool,
    //-------------------------------------
    productModal: PropTypes.func.isRequired,
    //-------------------------------------
    listMeasure: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
    modal: state.productFormReducer.modal,
    edit: state.productFormReducer.edit,
    loadingGet: state.productGetStatusReducer.loading,
    //----------------------------------------------
    listMeasure: state.measureReducer.list,
    listProvider: state.providerReducer.list,
    product: state.productReducer.product
});
const mapDispatchToProps = {
    productModal,
    productAddRequest,
    productUpdateRequest,

};

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
