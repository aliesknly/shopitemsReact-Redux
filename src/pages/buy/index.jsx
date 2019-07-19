import React, {Component} from 'react';
import PropTypes from 'prop-types';
//Components
import {Row,Col} from 'reactstrap';
import OrderList from "./components/BuyList";

class Index extends Component {
    render() {
        return (
            <div>
                <div style={styles.container}>
                    <h2>Buy</h2>
                </div>
                <Row>
                    <Col lg={'auto'} xs={'auto'} sm={'auto'}>
                        <OrderList/>
                    </Col>
                </Row>
            </div>
        );
    }
}

Index.propTypes = {
    styles:PropTypes.object
};

const styles = {
    container:{
        marginTop: '10px',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
};

export default Index;