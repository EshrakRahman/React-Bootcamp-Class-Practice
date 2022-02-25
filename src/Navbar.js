import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className='menu fix'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Portfolio</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;