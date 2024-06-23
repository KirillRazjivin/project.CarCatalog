import { useContext, useEffect, useState } from 'react'
import styles from './Home.module.css'
import {cars as carsData} from './cars.data.js'
import CreatCarForm from './creat-car-form/CreatCarForm.jsx'
import axios from 'axios'
import CarService from '../../../services/car.service.js'
import CarItem from './Car-item/CarItem.jsx'
import { AuthContext } from '../../../Providers/AuthProvider.jsx'

function Home() {
const [cars, SetCars] = useState([])


 useEffect(() => {
     const fetchData = async() => {
         const data = await CarService.getALL()
        

         SetCars(data)
     }

     fetchData()
 }, [])

 const {user, SetUser} = useContext(AuthContext)

    return(
        <div>
            <h1>Cars Catalog</h1>
            {user ? <>
                <h2>
                Welcome, {user.name}!
            </h2>
            <button onClick={() => SetUser(null)} >Logout</button>
            </> 
            :
            <button onClick={() => SetUser({
                name: 'Kirill'
            })} >Login</button>
            }

            <CreatCarForm SetCars={SetCars} />
            <div>
                {cars.map(car => (
                 <CarItem key={car.id} car={car}/>   
                ))}
                
            </div>
        </div>
    ) 

}


export default Home