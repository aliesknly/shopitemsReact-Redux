import React, {Component} from 'react';
import PropTypes from 'prop-types';
//Components
import {ButtonGroup} from 'reactstrap';
import MeasureDelete from "./MeasureDelete";
import MeasureEdit from "./MeasureEdit";

class MeasureItem extends Component {
    render() {
        const {no,item} = this.props;
        return (
            <tr>
                <th>{no}</th>
                <td>{item.name}</td>
                <td>
                    <ButtonGroup>
                        <MeasureDelete idItem={item.id}/>
                        <MeasureEdit idItem={item.id}/>
                    </ButtonGroup>
                </td>
            </tr>
        );
    }
}

MeasureItem.propTypes = {
    no:PropTypes.number.isRequired,
    item:PropTypes.object.isRequired,
};

export default MeasureItem;
