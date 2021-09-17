import React from 'react'
import { useParams } from 'react-router-dom'
import { fetchOneDevice } from '../http/deviceAPI'

export const DevicePage = () => {
    const { id } = useParams()
    const click = async () => {
        const { data } = await fetchOneDevice(id)
        setDeviceData(data)
    }
    return (
        <>
            <div>DevicePage</div>
            <button onClick={click}>click me</button>
        </>
    )
}