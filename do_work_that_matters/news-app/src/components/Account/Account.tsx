import React, {Component} from 'react';

class Account extends Component {
    render() {
        return (
            <div>
                Account: {localStorage.getItem('authUser')}
            </div>
        );
    }
}

export default Account;
