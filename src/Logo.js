import React, {Component} from 'react';
import LogoImage from './logo192.png'




class Logo extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="logo fix">
                    <img src={LogoImage} alt={'logo'}/>
                </div>
            </React.Fragment>
        );
    }
}

export default Logo;