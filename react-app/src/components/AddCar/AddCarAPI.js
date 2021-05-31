import React from 'react'
import AddCar from "./AddCar";

class AddCarAPI extends React.Component {
    render() {
        return <AddCar inputSettings={this.props.inputSettings}
                       updateInputValues={this.props.updateInputValues}
        />
    }
}

export default AddCarAPI