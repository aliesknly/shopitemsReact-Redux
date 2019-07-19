//Dependencies
import React, {Component} from 'react';
import {connect} from "react-redux";
import MessageAlert from "./MessageAlert";
//Components
import {Container} from 'reactstrap'
class Body extends Component {

    render() {
        const {children} = this.props;
        return (
            <Container style={styles.container}>
                <MessageAlert/>
                {children}
            </Container>
        );
    }
}

Body.propTypes = {};
const styles = {
    container: {
        paddingLeft:'20px',
        paddingRight:'20px',
        paddingTop:'60px',
    }
};

export default connect()(Body);