import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BrandBar } from '../components/BrandBar'
import { TypeBar } from '../components/TypeBar'

export const Shop = () => {
    return(
        <Container className="mt-2">
            <Row>
                <Col md={3}><TypeBar/></Col>
                <Col md={9}><BrandBar/></Col>
            </Row>
        </Container>
    )
}