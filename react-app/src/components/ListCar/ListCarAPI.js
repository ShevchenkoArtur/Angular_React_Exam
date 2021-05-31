import React from 'react'
import ListCar from "./ListCar";
import axios from "axios";

class ListCarAPI extends React.Component {

    componentDidMount() {
        axios.get('http://localhost:8080/api/cars').then(response => {
            this.props.getCars(response.data)
        })
    }

    render() {
        return <ListCar cars={this.props.cars}/>
    }
}

export default ListCarAPI