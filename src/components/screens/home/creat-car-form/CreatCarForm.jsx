import React from 'react'
import styles from './CreateCarForm.module.css' 
import { useState } from 'react'

    const clearData = {
        name: '',
        price: '',
        image: ''
    }


 const CreatCarForm  = ({SetCars}) => {
    const [data, setData] = useState(clearData)

    const creatCar = e => {
        e.preventDefault()
        
        SetCars(prev  => [{ id: prev.length +1, ...data}, ...prev ])

        setData( {
            name: '',
            price: '',
            image: ''
        })
    }

    return (
        <form className={styles.form}>
            <input placeholder="Name" onChange={e => setData(prev =>({...prev, name:e.target.value}))}
            value={data.name} />
            <input placeholder="Price" onChange={e => setData(prev =>({...prev, price:e.target.value}))}
            value={data.price} />
            <input placeholder='Image' onChange={e => setData(prev =>({...prev, image:e.target.value}))}
            value={data.image} />

            <button className='btn' onClick={e => creatCar(e)}>Create</button>
        </form>
    )
}

export default CreatCarForm

