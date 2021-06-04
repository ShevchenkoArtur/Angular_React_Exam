import {connect} from "react-redux";
import EditCarAPI from "./EditCarAPI";
import {setNavigateToEditToggle} from "../../redux/reducers/carReducer";


const mapStateToProps = state => {
    return {
        navigateToEdit: state.carsCRUD.navigateToEdit,
        editedCarId: state.carsCRUD.editedCarId,
        cars: state.carsCRUD.cars
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setNavigateToEditToggle: (bool) => {
            dispatch(setNavigateToEditToggle(bool))
        }
    }
}

const EditCarContainer = connect(mapStateToProps, mapDispatchToProps)(EditCarAPI)

export default EditCarContainer