import React from 'react'
import ListCar from "./ListCar";
import axios from "axios";

class ListCarAPI extends React.Component {

    constructor(props) {
        super(props);
        this.onDeleteCar = this.onDeleteCar.bind(this)
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/cars')
            .then(response => {
                this.props.getCars(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }

    onDeleteCar(id) {
        axios.delete(`http://localhost:8080/api/cars/${id}`)
            .catch(error => {
                console.log(error);
            })

        this.props.deleteCar(id)
    }

    render() {
        return <ListCar cars={this.props.cars}
                        deleteCar={this.onDeleteCar}
        />
    }
}

export default ListCarAPI