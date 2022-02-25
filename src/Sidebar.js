import React, {Component} from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div className={'sidebar fix'}>
                <h1>Sidebar</h1>
                <ul>
                    <li><a href="/">About us</a></li>
                    <li><a href="/">Contact us</a></li>
                    <li><a href="/">Portfolio</a></li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;