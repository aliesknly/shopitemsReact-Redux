import React, {Component} from 'react';
import PropTypes from 'prop-types';
//Component
import ButtonDelete from "./ButtonDelete";
import ButtonEdit from "./ButtonEdit";
import {Row, Col, Card, CardHeader, CardFooter, ListGroupItem,} from "reactstrap";

class ProviderItem extends Component {
    render() {
        const {item, no} = this.props;
        return (
            <Card >
                <CardHeader className="text-center">
                    <strong>{`Shop ${no}:`}</strong> {item.shopname}
                </CardHeader>
                <ListGroupItem className="text-left">
                    <strong>Name: </strong>{item.firstname + ' ' + (item.lastname !== null ? item.lastname : '')}
                </ListGroupItem>
                <ListGroupItem className="text-left">
                    <strong>Email: </strong>{item.email}
                </ListGroupItem>
                <CardFooter className="text-center">
                    <Row>
                        <Col className={"d-flex justify-content-around"}>
                                <ButtonDelete idItem={item.id}/>
                                <ButtonEdit idItem={item.id}/>
                        </Col>
                    </Row>
                </CardFooter>
            </Card>
        );
    }
}

ProviderItem.propTypes = {
    item: PropTypes.object.isRequired
};



export default ProviderItem;
