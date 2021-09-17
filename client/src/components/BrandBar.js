import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Card, Row } from 'react-bootstrap'
import { Context } from '..'

export const BrandBar = observer(() => {
    const { device } = useContext(Context)
    return(
        <Row className="d-flex">
            {device.brands.map(brand => 
                <Card
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
                    onClick={()=>device.setSelectedBrand(brand)}
                    className="p-3 w-auto"
                    key={brand.id}
                    style={{cursor: 'pointer'}}
                >{brand.name}</Card>
            )}
        </Row>
    )
})