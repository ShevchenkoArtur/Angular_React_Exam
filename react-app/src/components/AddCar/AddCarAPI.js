import React from 'react'
import AddCar from "./AddCar";
import axios from "axios";

class AddCarAPI extends React.Component {

    constructor(props) {
        super(props);
        this.onAddCar = this.onAddCar.bind(this)
    }

    onAddCar() {
        if (this.props.inputInfo.value.brand &&
            this.props.inputInfo.value.model &&
            this.props.inputInfo.value.year &&
            this.props.inputInfo.value.price
        ) {
            axios.post('http://localhost:8080/api/cars', this.props.inputInfo.value)
                .catch(error => {
                    console.log(error)
                })
            this.props.resetInput()
            this.props.setAddToggle(true)
        }
    }

    render() {
        return <AddCar inputInfo={this.props.inputInfo}
                       updateInputValues={this.props.updateInputValues}
                       addCar={this.onAddCar}
                       notificationFlags={this.props.notificationFlags}
                       setAddToggle={this.props.setAddToggle}
        />
    }
}

export default AddCarAPI