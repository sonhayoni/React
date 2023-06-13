import React, { Component } from "react";
import cookie from 'react-cookies';

class R86_cookieLoad extends Component {
    componentDidMount() {
        const expires = new Date()
        expires.setMinutes(expires.getMinutes() + 60)
        cookie.save('userid', "react200"
            , {
                path: '/',
                expires: expires,
                //secure : true,
                //httpOnly : true
            }
        );
        setTimeout(function () {
            alert(cookie.load('userid'))
        }, 5000);
    }
    render() {
        return (
            <><h3>react cookies load</h3></>
        )
    }
}

export default R86_cookieLoad;
