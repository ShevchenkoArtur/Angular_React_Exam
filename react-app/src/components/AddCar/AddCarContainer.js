import {connect} from "react-redux";
import AddCarAPI from "./AddCarAPI";
import {resetInput, setAddToggle, updateAddCarInputValues} from "../../redux/reducers/carReducer";

const mapStateToProps = state => {
    return {
        inputInfo: state.carsCRUD.addCarInputInfo,
        notificationFlags: state.carsCRUD.notificationFlags
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateInputValues: (inputName, newValue) => {
            dispatch(updateAddCarInputValues(inputName, newValue))
        },
        resetInput: () => {
            dispatch(resetInput())
        },
        setAddToggle: bool => {
            dispatch(setAddToggle(bool))
        }
    }
}

const AddCarContainer = connect(mapStateToProps, mapDispatchToProps)(AddCarAPI)

export default AddCarContainer