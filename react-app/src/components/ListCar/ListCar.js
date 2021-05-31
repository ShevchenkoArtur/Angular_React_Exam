import React from 'react'

const ListCar = props => {
    return (
        <ul>
            {
                props.cars.map(car => {
                    return (
                        <li key={car.id}>
                            <p>brand: {car.brand}</p>
                            <p>model: {car.model}</p>
                            <p>year: {car.year}</p>
                            <p>price: {car.price}</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ListCar