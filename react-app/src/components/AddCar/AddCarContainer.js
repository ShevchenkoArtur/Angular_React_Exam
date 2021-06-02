import {connect} from "react-redux";
import AddCarAPI from "./AddCarAPI";
import {resetInput, updateAddCarInputValues} from "../../redux/reducers/carReducer";

const mapStateToProps = state => {
    return {
        inputInfo: state.carsCRUD.addCarInputInfo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateInputValues: (inputName, newValue) => {
            dispatch(updateAddCarInputValues(inputName, newValue))
        },
        resetInput: () => {
            dispatch(resetInput())
        }
    }
}

const AddCarContainer = connect(mapStateToProps, mapDispatchToProps)(AddCarAPI)

export default AddCarContainer