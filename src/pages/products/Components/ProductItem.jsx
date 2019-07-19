import React, {Component} from 'react';
import PropTypes from 'prop-types';
//Components
import { Card, CardHeader, CardFooter, ListGroupItem, Col, Row} from 'reactstrap';
import ProductDelete from "./ProductDelete";
import ProductEdit from "./ProductEdit";

class ProductItem extends Component {
    render() {
        const {no, item} = this.props;
        return (
            <Card>
                <CardHeader className={'text-center'}>
                    <strong>{no} </strong> {item.name}
                </CardHeader>
                <ListGroupItem>
                    <strong>MU: </strong>{item.measure}
                </ListGroupItem>
                <ListGroupItem>
                    <strong>Shop: </strong>{item.provider}
                </ListGroupItem>
                <CardFooter className={'text-center '}>
                    <Row>
                        <Col className={"d-flex justify-content-around"}>
                            <ProductDelete idItem={item.id}/>
                            <ProductEdit idItem={item.id}/>
                        </Col>
                    </Row>
                </CardFooter>
            </Card>
        );
    }
}

ProductItem.propTypes = {
    no: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired,
};

export default ProductItem;
