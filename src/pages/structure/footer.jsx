import React, {Component} from 'react';
import Navbar from "reactstrap/es/Navbar";

class Footer extends Component {
    render() {
        return (
            <Navbar color="light">
                <div className="container">
                    <p className="text-muted credit">Developed by
                        <a href="https://www.linkedin.com/in/alieskyperez/"> Aliesky Pérez</a>.
                        Power by <a href="http://gsid.cantinaslaflor.com/">GSID-Solutions</a>
                    </p>
                </div>
            </Navbar>
        );
    }
}

Footer.propTypes = {};

export default Footer;