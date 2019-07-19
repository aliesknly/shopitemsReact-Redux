import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
//Components
import {Table, Spinner} from 'reactstrap';
import MeasureItem from './MeasureItem';
//Actions
import {measureListRequest} from "../../../actions";

class MeasureTable extends Component {
    componentDidMount = () => {
        this.props.measureListRequest();
    };

    render() {
        const {list, loadingList} = this.props;
        return (
            (loadingList && <Spinner color={'primary'}/>) ||
            <Table striped size={'sm'} responsive>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {list.map((item, key) => (
                    <MeasureItem key={key} no={key + 1} item={item}/>
                ))}
                </tbody>
            </Table>

        );
    }
}

MeasureTable.propTypes = {
    list: PropTypes.array.isRequired,
    loadingList: PropTypes.bool.isRequired,
    measureListRequest: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
    list: state.measureReducer.list,
    loadingList: state.measureListStatusReducer.loading,
});

const mapDispatchToProps = {
    measureListRequest
};


export default connect(mapStateToProps, mapDispatchToProps)(MeasureTable);
