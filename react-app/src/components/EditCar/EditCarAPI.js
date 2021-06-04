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
            <EditCar
                     editedCarId={this.props.editedCarId}
                     cars={this.props.cars}
                     inputSettings={this.props.inputSettings}
                     updateInputValues={this.props.updateInputValues}
                     onEditCar={this.onEditCar}
            />
        )
    }
}

export default EditCarAPI