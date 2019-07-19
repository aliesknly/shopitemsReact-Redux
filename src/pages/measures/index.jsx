import React, {Component} from 'react';
//Components
import MeasureTable from "./components/MeasureTable";
import MeasureAdd from "./components/MeasureAdd";

class Index extends Component {
    render() {
        return (
            <div>
                <h2>Measures <MeasureAdd/></h2>
                <MeasureTable/>
            </div>
        );
    }
}

Index.propTypes = {};

export default Index;