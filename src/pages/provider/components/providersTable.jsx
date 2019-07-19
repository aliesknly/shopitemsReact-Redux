import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
//Component
import {CardColumns, Spinner} from 'reactstrap';
import ProviderItem from './ProviderItem';
//Actions
import {providerListRequest} from "../../../actions";


class ProviderTable extends Component {
    componentDidMount = () => {
        this.props.providerListRequest();
    };

    render() {
        const {loadingList, list} = this.props;
        return (
            (loadingList && <Spinner color={'primary'}/>) ||
            <CardColumns>
                {
                    list.map((item, key) => (
                        <ProviderItem item={item} key={key} no={key + 1}/>
                    ))
                }
            </CardColumns>

        );
    }
}

ProviderTable.propTypes = {
    list: PropTypes.array.isRequired,
    loadingList: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
    loadingList: state.providerListStatusReducer.loading,
    list: state.providerReducer.list,
});

const mapDispatchToProps = {
    providerListRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(ProviderTable);
