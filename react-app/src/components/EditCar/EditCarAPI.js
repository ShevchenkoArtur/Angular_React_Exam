import React from 'react'
import EditCar from "./EditCar";
import axios from "axios";

class EditCarAPI extends React.Component {

    constructor(props) {
        super(props);
        this.onEditCar = this.onEditCar.bind(this)
    }

    onEditCar() {
        let data = this.props.cars.filter(car => car.id === this.props.editedCarId)[0]

        axios.put(`http://localhost:8080/api/cars/${this.props.editedCarId}`, data)
            .catch(error => {
                console.log(error);
            })

        this.props.resetInputs()
        this.props.setEditNotificationToggle(true)
    }

    render() {
        return (
            <EditCar onEditCar={this.onEditCar}
                     updateInputValues={this.props.updateInputValues}
                     inputControl={this.props.inputControl}
                     cars={this.props.cars}
                     editedCarId={this.props.editedCarId}
                     updateEditedCarInputValues={this.props.updateEditedCarInputValues}
                     notificationFlags={this.props.notificationFlags}
                     setEditNotificationToggle={this.props.setEditNotificationToggle}
            />
        )
    }
}

export default EditCarAPI