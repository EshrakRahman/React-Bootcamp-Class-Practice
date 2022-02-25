import React, {Component} from 'react';
import Header from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='main'>
                    <Header />
                    <Content />
                    <Sidebar />
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}

export default App;