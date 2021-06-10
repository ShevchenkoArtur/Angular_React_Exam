import React from 'react'
import axios from 'axios'
import AddCar from './AddCar'

class AddCarAPI extends React.Component {

    constructor(props) {
        super(props)
        this.onAddCar = this.onAddCar.bind(this)
    }

    onAddCar() {
        const data = {
            brand: this.props.inputControl.brandInput.value,
            model: this.props.inputControl.modelInput.value,
            year: this.props.inputControl.yearInput.value,
            price: this.props.inputControl.priceInput.value
        }
        if (data.brand &&
            data.model &&
            data.year &&
            data.price
        ) {
            axios.post('http://localhost:8080/api/cars', data)
                .catch(error => {
                    console.log(error)
                })

            this.props.resetInputs()
            this.props.setAddToggle(true)
        }
    }

    render() {
        return <AddCar addCar={this.onAddCar}
                       inputControl={this.props.inputControl}
                       updateInputValues={this.props.updateInputValues}
                       notificationFlags={this.props.notificationFlags}
                       setAddNotificationToggle={this.props.setAddNotificationToggle}
        />
    }
}

export default AddCarAPI