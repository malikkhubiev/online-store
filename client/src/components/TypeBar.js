import React from 'react'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { ListGroup } from 'react-bootstrap'
import { Context } from '../index'

export const TypeBar = observer(() => {
    const { device } = useContext(Context)
    return (
        <ListGroup>
            { device.types.map(type=>
                <ListGroup.Item
                    active={type.id === device.selectedType.id}
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}
                    style={{cursor: 'pointer'}}
                >{type.name}</ListGroup.Item>
            ) }
        </ListGroup>
    )
})