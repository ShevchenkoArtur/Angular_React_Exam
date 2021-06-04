import {connect} from "react-redux";
import EditCarAPI from "./EditCarAPI";
import {
    updateAddCarInputValues
} from "../../redux/reducers/carReducer";


const mapStateToProps = state => {
    return {
        inputSettings: state.carsCRUD.addCarInputInfo,
        editedCarId: state.carsCRUD.editedCarId,
        cars: state.carsCRUD.cars
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateInputValues: (inputName, newValue) => {
            dispatch(updateAddCarInputValues(inputName, newValue))
        }
    }
}

const EditCarContainer = connect(mapStateToProps, mapDispatchToProps)(EditCarAPI)

export default EditCarContainer