import {connect} from "react-redux";
import AddCarAPI from "./AddCarAPI";
import {updateAddCarInputValues} from "../../redux/reducers/carReducer";

const mapStateToProps = state => {
    return {
        inputSettings: state.carsCRUD.addCarInputSettings
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateInputValues: (inputName, newValue) => {
            dispatch(updateAddCarInputValues(inputName, newValue))
        }
    }
}

const AddCarContainer = connect(mapStateToProps, mapDispatchToProps)(AddCarAPI)

export default AddCarContainer