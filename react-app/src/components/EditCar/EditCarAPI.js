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
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <EditCar updateInputValues={this.props.updateInputValues}
                     inputControl={this.props.inputControl}
            />
        )
    }
}

export default EditCarAPI