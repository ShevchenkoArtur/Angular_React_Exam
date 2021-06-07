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
        <>
            {
                props.notificationFlags.isDelete ? <Notification message={deleteMessage}/> : ''
            }
            <table>
                <thead>
                <tr>
                    <td>id</td>
                    <td>Brand</td>
                    <td>Model</td>
                    <td>Year</td>
                    <td>Price</td>
                    <td></td>
                    <td></td>
                </tr>
                </thead>
                <tbody>
                {
                    props.cars.map(car => {
                        return (
                            <tr key={car.id}>
                                <td>{car.id}</td>
                                <td>{car.brand}</td>
                                <td>{car.model}</td>
                                <td>{car.year}</td>
                                <td>{car.price}</td>
                                <td>
                                    <NavLink to='edit-car'>
                                        <img src={editIcon} alt="Edit"/>
                                    </NavLink>
                                </td>
                                <td>
                                    <img onClick={() => onDeleteCar(car.id)}
                                         src={deleteIcon}
                                         alt="Delete"
                                    />
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </>
    )
}

export default ListCar