import React, { Component } from 'react';
import cookies from 'react-cookies';

class R85_cookieSave extends Component {
    componentDidMount() {
        const expires = new Date()
        expires.setMinutes(expires.getMinutes() + 60)
        cookies.save('userid', "react200"
            , {
                path: '/',
                expires,
                // secure: true,
                //httpOnly: true

            }
        );
    }


    render() {
        return (
            <><h3>react-cookies Save</h3></>
        )
    }
}

export default R85_cookieSave;