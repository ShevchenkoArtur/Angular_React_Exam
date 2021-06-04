import React from 'react'
import EditCar from "./EditCar";

class EditCarAPI extends React.Component {

    render() {
        return (
            <EditCar setNavigateToEditToggle={this.props.setNavigateToEditToggle}
                     navigateToEdit={this.props.navigateToEdit}
                     editedCarId={this.props.editedCarId}
                     cars={this.props.cars}
            />
        )
    }
}

export default EditCarAPI