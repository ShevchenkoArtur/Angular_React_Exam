import React from 'react'
import AddCar from "./AddCar";
import axios from "axios";

class AddCarAPI extends React.Component {

    constructor(props) {
        super(props);
        this.onAddCar = this.onAddCar.bind(this)
    }

    onAddCar() {
        axios.post('http://localhost:8080/api/cars', this.props.inputInfo.value)
            .catch(error => {
                console.log(error)
            })

        this.props.resetInput()
    }

    render() {
        return <AddCar inputInfo={this.props.inputInfo}
                       updateInputValues={this.props.updateInputValues}
                       addCar={this.onAddCar}
        />
    }
}

export default AddCarAPI