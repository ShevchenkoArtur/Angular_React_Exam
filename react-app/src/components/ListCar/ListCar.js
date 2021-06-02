import React from 'react'
import style from './ListCar.module.css'
import deleteIcon from '../../assets/images/icons/deleteIcon.svg'
import editIcon from '../../assets/images/icons/editIcon.svg'

const ListCar = props => {

    const onDeleteCar = id => {
        props.deleteCar(id)
    }

    return (
        <ul className={style.list}>
            {
                props.cars.map(car => {
                    return (
                        <li className={style.item} key={car.id}>
                            <div className={style.info}>
                                <p><strong>{car.brand} {car.model}</strong></p>
                                <p>Цена: {car.price}</p>
                                <p>Год выпуска: {car.year}</p>
                            </div>
                            <div className={style.action}>
                                <button>
                                    <img src={editIcon} alt="Edit" title="Edit"/>
                                </button>
                                <button onClick={() => onDeleteCar(car.id)}>
                                    <img src={deleteIcon} alt="Delete" title="Delete"/>
                                </button>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ListCar