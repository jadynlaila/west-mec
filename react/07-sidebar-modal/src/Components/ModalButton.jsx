import React from 'react'
import { useAppContext } from '../util/context'


const ModalButton = () => {
    const {openModal} = useAppContext();
    return (
        <button onClick={openModal} className="btn">Show Modal</button>
    )
}

export default ModalButton
