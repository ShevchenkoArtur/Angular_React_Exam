import {connect} from "react-redux";
import EditCarAPI from "./EditCarAPI";
import {updateInputValues} from "../../redux/reducers/carReducer";

const mapStateToProps = state => {
    return {
        inputControl: state.carsCRUD.inputControl
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateInputValues: (inputName, newValue) => {
            dispatch(updateInputValues(inputName, newValue))
        }
    }
}

const EditCarContainer = connect(mapStateToProps, mapDispatchToProps)(EditCarAPI)

export default EditCarContainer