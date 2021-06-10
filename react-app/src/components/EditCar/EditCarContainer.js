import {connect} from "react-redux";
import EditCarAPI from "./EditCarAPI";
import {
    resetInputs,
    setEditNotificationToggle,
    updateEditedCarInputValues,
    updateInputValues
} from "../../redux/reducers/carReducer";

const mapStateToProps = (state) => {
    return {
        cars: state.carsCRUD.cars,
        inputControl: state.carsCRUD.inputControl,
        editedCarId: state.carsCRUD.editedCarId,
        notificationFlags: state.carsCRUD.notificationFlags
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateInputValues: (inputName, newValue) => {
            dispatch(updateInputValues(inputName, newValue))
        },
        updateEditedCarInputValues: (inputName, newValue) => {
            dispatch(updateEditedCarInputValues(inputName, newValue))
        },
        resetInputs: () => {
            dispatch(resetInputs())
        },
        setEditNotificationToggle: bool => {
            dispatch(setEditNotificationToggle(bool))
        }
    }
}

const EditCarContainer = connect(mapStateToProps, mapDispatchToProps)(EditCarAPI)

export default EditCarContainer