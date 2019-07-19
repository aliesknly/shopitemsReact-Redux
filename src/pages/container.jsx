import React, {Component} from 'react';

//Components
import Shape from "./shape";
//Actions

class Container extends Component {
    render() {
        const {children} = this.props;
        return (
                <Shape>
                    {children}
                </Shape>
        );
    }
}



export default Container;