import React, { Component } from "react"
import { UncontrolledCarousel, Card, CardBody, Button, CardTitle, CardText, CardImg, CardSubtitle, Row, Col } from 'reactstrap';

const items = [
    {
        src: 'https://i5.walmartimages.ca/images/Enlarge/094/514/6000200094514.jpg',
        altText: 'Slide 1',
        caption: '1000',
        header: 'apel',
        key: '1'
    },
    {
        src: 'https://s0.bukalapak.com/img/5021243332/w-1000/bibit_buah_mangga_harum_manis.png',
        altText: 'Slide 2',
        caption: '2000',
        header: 'mangga',
        key: '2'
    },
    {
        src: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2017%2F11%2Fmain%2Fcitrus-variety-getty-1711w.jpg%3Fitok%3DS0XHiXja&w=400&c=sc&poi=face&q=85',
        altText: 'Slide 3',
        caption: '3000',
        header: 'jeruk',
        key: '3'
    }
];

class carousel extends Component {
    render() {
        return (
            <div>
                <div>
                    <UncontrolledCarousel items={items} />;
                </div>
            </div>
        )
    }
}

export default carousel