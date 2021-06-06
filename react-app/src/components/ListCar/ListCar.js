import React from 'react'
import style from './ListCar.module.css'
import deleteIcon from '../../assets/images/icons/deleteIcon.svg'
import editIcon from '../../assets/images/icons/editIcon.svg'
import Notification from "../Notification/Notification";
import {Link, NavLink, Redirect} from "react-router-dom";


const ListCar = props => {

    const deleteMessage = "Машина была удалена!"

    if (props.notificationFlags.isDelete) {
        setTimeout(() => {
            props.setDeleteToogle(false)
        }, 2000)
    }

    const onDeleteCar = id => {
        props.deleteCar(id)
    }

    const onEditCar = id => {
        props.setIdEditedCar(id)
    }


    return (
        <ul className={style.list}>
            {
                props.notificationFlags.isDelete ? <Notification message={deleteMessage}/> : ''
            }
            {
                props.cars.length === 0 ? <div>Раздел пуст!</div> :
                    props.cars.map(car => {
                            return (
                                <li className={style.item} key={car.id}>
                                    <div className={style.info}>
                                        <p><strong>{car.brand} {car.model}</strong></p>
                                        <p>Цена: {car.price}</p>
                                        <p>Год выпуска: {car.year}</p>
                                    </div>

                                    <div className={style.action}>
                                        <NavLink to='/edit-car'>
                                            edit
                                            {/*onClick={() => onEditCar(car.id)}*/}
                                            {/*<button >*/}
                                            {/*    <img src={editIcon} alt="Edit" title="Edit"/>*/}
                                            {/*</button>*/}
                                        </NavLink>

                                        <button onClick={() => onDeleteCar(car.id)}>
                                            <img src={deleteIcon} alt="Delete" title="Delete"/>
                                        </button>
                                    </div>
                                </li>
                            )
                        }
                    )
            }
        </ul>
    )
}

export default ListCar