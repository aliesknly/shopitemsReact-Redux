import React, {Component} from 'react';
import PropTypes from 'prop-types';
//Components
import {
    Form, FormGroup, FormFeedback, Spinner, Input, Label, Button,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

class MeasureForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            errors: []
        }
    }

    componentDidUpdate = (prevProps) => {
        const {measure, modal} = this.props;
        if (modal) {
            if (prevProps.measure !== measure) {
                this.loadData()
            }
        }
    };

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({[name]: value});
    };

    loadData = () => {
        const {edit, measure} = this.props;
        if (edit) {
            this.setState({
                name: measure.name,
            })
        }
    };

    dataClear = () => {
        this.setState({
            name: ''
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {errors, ...noerrors} = this.state;
        const result = this.validateForm(noerrors);
        this.setState({errors: result});

        if (!Object.keys(result).length) {
            const {
                measureAddRequest, measureUpdateRequest,
                edit, idItem
            } = this.props;
            if (edit) {
                measureUpdateRequest(this.state, idItem);
                this.dataClear();
            } else {
                measureAddRequest(this.state);
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
        return errors;
    };

    render() {
        const {errors, name} = this.state;
        const {loadingSave, loadingGet, modal, toggle, edit} = this.props;
        return (
            <Modal isOpen={modal} toggle={toggle}>
                <Form onSubmit={this.handleSubmit}>
                    <ModalHeader toggle={toggle}>
                        {(edit && 'Edit ') || 'Add '} Measure
                        {loadingSave && <Spinner color={'danger'}/>}
                        {loadingGet && <Spinner color={'primary'}/>}
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for={'name'}>Name</Label>
                            <Input id={'name'}
                                   name={'name'}
                                   type={'text'}
                                   placeholder={'measure'}
                                   invalid={errors.name && true}
                                   onChange={this.handleChange}
                                   value={name || ''}
                                   disabled={loadingGet}
                            />
                            <FormFeedback>{errors.name}</FormFeedback>
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

MeasureForm.propTypes = {
    loadingSave: PropTypes.bool.isRequired,
    modal: PropTypes.bool.isRequired,
    edit: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    measure:PropTypes.object,
};

export default MeasureForm;
