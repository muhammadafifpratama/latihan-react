import React from 'react';
import { Card, CardTitle, Row, Col } from 'reactstrap';

const Kartu = (props) => {
    console.log(props)
    return (
        <Row>
            <Col sm="6">
                <Card body>
                    <CardTitle>{props.contoh}</CardTitle>
                </Card>
            </Col>
        </Row>
    );
};

export default Kartu;