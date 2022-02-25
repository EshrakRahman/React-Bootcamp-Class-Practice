import React, {Component} from 'react';

class Content extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="content fix">

                    <div className={'content-one'}>
                        <h1>Chapter One</h1>
                        <p>This is a test for CI/CD. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias amet aperiam architecto asperiores at cum cupiditate dicta eveniet fuga inventore minus molestiae nemo nulla odio officia placeat quasi ratione, reiciendis rem repellat sapiente sed sint veniam vitae voluptas!</p>
                    </div>

                    <div className={'content-two'}>
                        <h1>Chapter Two</h1>
                        <p>This is the last time. This is a test for CI/CD. Second test on ci/cd. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias amet aperiam architecto asperiores at cum cupiditate dicta eveniet fuga inventore minus molestiae nemo nulla odio officia placeat quasi ratione, reiciendis rem repellat sapiente sed sint veniam vitae voluptas!</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Content;