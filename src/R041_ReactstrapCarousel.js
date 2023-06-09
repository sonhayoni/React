import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';


const items = [
    {
        src: 'http://bitly.kr/QUnjzAodA',
        altText: 'slide1 text',
        caption: 'slide1 caption',
        header: 'slide1 header'
    },
    {
        src: 'http://bitly.kr/n3vBOWt9g',
        altText: 'slide2 text',
        caption: 'slide2 caption',
        header: 'slide2 header'
    },
    {
        src: 'http://bitly.kr/uzWLMeIJh',
        altText: 'slide3 text',
        caption: 'slide3 caption',
        header: 'slide3 header'
    }
];

class R041_ReactstrapCarousel extends Component {
    render() {
        return (
            <UncontrolledCarousel items={items} />
        )
    }
}

export default R041_ReactstrapCarousel;