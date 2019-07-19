import React, {Component} from 'react';
import PropTypes from 'prop-types';
//Components
import {Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';
import {FaShoppingCart} from "react-icons/fa";

class BuyItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 0,
        }
    }

    componentDidMount = () => {
        const {item} = this.props;
        this.setState({
            product_id: item.id,
            provider_id:item.provider_id,
            name: item.name,
            measure: item.measure,

        })
    };

    increment = () => {
        this.setState(prevState => ({
            quantity: prevState.quantity + 1
        }))
    };

    decrement = () => {
        if (this.state.quantity > 0) {
            this.setState(prevState => ({
                quantity: prevState.quantity - 1
            }))
        }
    };

    handleChange = ({target}) => {
        const {name, value} = target;
        this.setState({[name]: value})
    };

    addOrder = () => {
        const {orderAddRequest} = this.props;

        if (this.state.quantity > 0) {
            //   console.log(this.state);
            orderAddRequest(this.state);
            this.setState({quantity: 0})
        }
    };

    render() {
        const {quantity} = this.state;
        const {item} = this.props;
        return (
            <div style={styles.container}>
                <div style={styles.boxName}>
                    <h4>{item.name}</h4>
                    <b>{item.measure}</b>
                    <h5>{item.provider}</h5>
                </div>
                <div style={styles.box}>
                    <div>
                        <InputGroup>
                            <InputGroupAddon addonType={"prepend"}>
                                <Button onClick={this.decrement} disabled={quantity < 1 && true}><b>-</b></Button>
                            </InputGroupAddon>
                            <Input className={'text-center'} type={'text'} name={'quantity'} value={quantity} style={styles.field}
                                   onChange={this.handleChange}/>
                            <InputGroupAddon addonType={"append"}>
                                <Button  onClick={this.increment}><b>+</b></Button>
                            </InputGroupAddon>
                        </InputGroup>
                        <div style={styles.buttonAdd}>
                            <Button color={'info'} onClick={this.addOrder} block disabled={quantity < 1 && true}>Add <FaShoppingCart/></Button>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

BuyItem.propTypes = {
    item: PropTypes.object.isRequired
};

const styles = {
    container: {
        marginTop: '10px',
        background: '#dae6f4',
        // border: 'solid 1px',
        borderRadius: '1em',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexBasis: '100%',
        justifyContent: 'space-between',
    },
    box: {
        margin: '5px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

    },
    boxName: {
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    field: {
        width: '50px',
    },
    buttonAdd:{
        paddingTop:"5px"
    }

};

export default BuyItem;
