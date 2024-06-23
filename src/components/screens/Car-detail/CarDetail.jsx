import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import CarService from "../../../services/car.service";
import CarItem from "../home/Car-item/CarItem";
import { Link } from "react-router-dom";

export const CarDetail = () => {
    const { id } = useParams();
    const [car, setCar] = useState({});


    useEffect(() => {
        if (!id) return;
        const fetchData = async () => {
            const data = await CarService.getById(id)

            setCar(data);
        };

        fetchData();
    }, [id]);


    return (
        <div>
          
            <CarItem car={car}/>
            <Link className="btn" to='/'>Back</Link>
        </div>
        
        
        
    );
};

export default CarDetail
