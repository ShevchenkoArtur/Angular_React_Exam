import {connect} from "react-redux";
import AddCarAPI from "./AddCarAPI";
import {resetInputs, setAddToggle, updateInputValues} from "../../redux/reducers/carReducer";

const mapStateToProps = state => {
    return {
        inputControl: state.carsCRUD.inputControl,
        notificationFlags: state.carsCRUD.notificationFlags
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateInputValues: (inputName, newValue) => {
            dispatch(updateInputValues(inputName, newValue))
        },
        resetInputs: () => {
            dispatch(resetInputs())
        },
        setAddToggle: bool => {
            dispatch(setAddToggle(bool))
        }
    }
}

const AddCarContainer = connect(mapStateToProps, mapDispatchToProps)(AddCarAPI)

export default AddCarContainer