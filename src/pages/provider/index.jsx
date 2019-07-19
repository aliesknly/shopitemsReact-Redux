import React, {Component} from 'react';
//Components
import ProviderTable from "./components/providersTable";
import ProviderAdd from "./components/ProviderAdd";

class Index extends Component {
    render() {
        return (
            <div>
                <h2>Providers <ProviderAdd/></h2>
                <ProviderTable/>
            </div>
        );
    }
}


export default Index;