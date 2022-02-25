import React, {Component} from 'react';
import Logo from "./Logo";
import Navbar from "./Navbar";
import HeaderImage from "./bannar.jpg"

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Logo />
                <Navbar />
                <div className={'header-area'}>
                    <img src={HeaderImage} alt="Header Area"/>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;