//Dependencies
import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {Redirect} from 'react-router';
//Componnents
import {
    Card, CardBody, CardFooter, CardHeader,
    Form,
    Input,
    Label,
    Button,
    FormGroup,
    FormFeedback,
    Spinner
} from 'reactstrap';
//Actions
import {userLoginRequest} from '../../actions'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: []
        }
    }

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({[name]: value})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {errors, ...noerrors} = this.state;
        const result = this.validateForm(noerrors);
        this.setState({errors: result});
        if (!Object.keys(result).length) {
            const {userLoginRequest} = this.props;
            userLoginRequest(this.state)
        }
    };

    validateForm = (value) => {
        const errors = {};
        if (!value.email) {
            errors.email = 'Required field email';
        }
        if (!value.password) {
            errors.password = 'Required field password';
        }

        return errors;
    };

    render() {
        const {errors} = this.state;
        const {loading, checkLoading, authStatus} = this.props;
        if (authStatus) return <Redirect to={'/buy'}/>;
        return (
            <div style={styles.login}>
                {
                    (checkLoading && <Spinner style={{width: '6rem', height: '6rem'}} type={'grow'} color={'danger'}/>) ||
                    <Card>
                        <CardHeader>
                            <h3>Login</h3>
                            {loading && <Spinner color='primary'/>}
                        </CardHeader>
                        <Form onSubmit={this.handleSubmit}>
                            <CardBody>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input id="email" name="email" type="email" placeholder="example@domain.com"
                                           onChange={this.handleChange}
                                           invalid={errors.email && true}/>
                                    <FormFeedback>{errors.email}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input id="password" name="password" type="password" placeholder="your password"
                                           onChange={this.handleChange}
                                           invalid={errors.password && true}/>
                                    <FormFeedback>{errors.password}</FormFeedback>
                                </FormGroup>
                            </CardBody>
                            <CardFooter>
                                <Button color="primary" block>Enter</Button>
                            </CardFooter>
                        </Form>
                    </Card>
                }
            </div>
        );
    }
}

Index.propTypes = {
    userLoginRequest: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    checkLoading: PropTypes.bool.isRequired,
    authStatus: PropTypes.bool.isRequired,
};

const styles = {
    login: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
    }
};

const mapStateToProps = (state) => ({
    loading: state.userLoginStatusReducer.loading,
    checkLoading: state.userCheckAuthStatus.loading,
    authStatus: state.userAuthStatusReducer.authStatus
});

const mapDispatchToProps = {
    userLoginRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);