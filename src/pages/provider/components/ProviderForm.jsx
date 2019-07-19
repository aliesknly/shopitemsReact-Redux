import React, {Component} from 'react';
import PropTypes from 'prop-types';
//Components
import {
    Form, FormGroup, FormFeedback, Spinner, Input, Label, Button,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

class ProviderForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            shopname: '',
            errors: []
        }
    }

    componentDidUpdate = (prevProps) => {
        const {provider, modal} = this.props;
        if (modal) {
            if (prevProps.provider !== provider) {
                this.loadData()
            }
        }
    };

    // componentWillReceiveProps = (nextProps) => {
    //     if (!nextProps.edit) {
    //         this.dataClear()
    //     }
    // };

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({[name]: value});
    };

    loadData = () => {
        const {edit, provider} = this.props;
        if (edit) {
            this.setState({
                firstname: provider.firstname,
                lastname: provider.lastname,
                email: provider.email,
                shopname: provider.shopname
            })
        }
    };

    dataClear = () => {
        this.setState({
            firstname: '',
            lastname: '',
            email: '',
            shopname: '',
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {errors, ...noerrors} = this.state;
        const result = this.validateForm(noerrors);
        this.setState({errors: result});

        if (!Object.keys(result).length) {
            const {
                providerAddRequest, providerUpdateRequest,
                edit, idItem
            } = this.props;
            if (edit) {
                providerUpdateRequest(this.state, idItem);
                this.dataClear();
            } else {
                providerAddRequest(this.state);
                this.dataClear();
            }
            e.target.reset();
        }
    };

    validateForm = (values) => {
        const errors = {};
        if (!values.firstname) {
            errors.firstname = "Field Firstname is required"
        }
        if (!values.email) {
            errors.email = "Field Email is required"
        }
        if (!values.shopname) {
            errors.shopname = "Field Shop Name is required"
        }
        return errors;
    };

    render() {

        const {errors, firstname, lastname, email, shopname} = this.state;
        const {loadingSave, loadingGet, modal, toggle, edit} = this.props;
        return (
            <Modal isOpen={modal} toggle={toggle}>
                <Form onSubmit={this.handleSubmit}>
                    <ModalHeader toggle={toggle}>
                        {(edit && 'Edit ') || 'Add '} Provider
                        {loadingSave && <Spinner color={'danger'}/>}
                        {loadingGet && <Spinner color={'primary'}/>}
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for={'firstname'}>Firstname</Label>
                            <Input id={'firstname'}
                                   name={'firstname'}
                                   placeholder={'Juan'}
                                   invalid={errors.firstname && true}
                                   onChange={this.handleChange}
                                   value={firstname || ''}
                                   disabled={loadingGet}
                            />
                            <FormFeedback>{errors.firstname}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for={'lastname'}>Lastname</Label>
                            <Input id={'lastname'}
                                   name={'lastname'}
                                   placeholder={'García'}
                                   onChange={this.handleChange}
                                   value={lastname || ''}
                                   disabled={loadingGet}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for={'email'}>Email</Label>
                            <Input id={'email'}
                                   name={'email'}
                                   type={'email'}
                                   placeholder={'example@domain.com'}
                                   invalid={errors.email && true}
                                   onChange={this.handleChange}
                                   value={email || ''}
                                   disabled={loadingGet}
                            />
                            <FormFeedback>{errors.email}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label for={'shopname'}>Shop Name</Label>
                            <Input id={'shopname'}
                                   name={'shopname'}
                                   type={'text'}
                                   placeholder={'Name Shop'}
                                   invalid={errors.shopname && true}
                                   onChange={this.handleChange}
                                   value={shopname || ''}
                                   disabled={loadingGet}
                            />
                            <FormFeedback>{errors.shopname}</FormFeedback>
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button type={'button'} onClick={toggle}>Cancel</Button>
                        <Button type={'submit'} color={'primary'} disabled={loadingGet}>Save</Button>
                    </ModalFooter>
                </Form>
            </Modal>
        );
    }
}

ProviderForm.propTypes = {
    provider: PropTypes.object.isRequired,
    loadingGet: PropTypes.bool.isRequired,
    loadingSave: PropTypes.bool.isRequired,
    modal: PropTypes.bool.isRequired,
    edit: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
};

export default ProviderForm;
