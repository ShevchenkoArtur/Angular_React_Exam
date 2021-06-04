import {connect} from "react-redux";
import ListCarAPI from "./ListCarAPI";
import {
    deleteCar,
    getCars,
    setDeleteToggle,
    setIdEditedCar,
    setNavigateToEditToggle
} from "../../redux/reducers/carReducer";

const mapStateToProps = state => {
    return {
        cars: state.carsCRUD.cars,
        notificationFlags: state.carsCRUD.notificationFlags,
        editIsOpen: state.carsCRUD.editIsOpen,
        navigateToEdit: state.carsCRUD.navigateToEdit
    }
}


const mapDispatchToProps = dispatch => {
    return {
        getCars: cars => {
            dispatch(getCars(cars))
        },
        deleteCar: id => {
            dispatch(deleteCar(id))
        },
        setDeleteToggle: bool => {
            dispatch(setDeleteToggle(bool))
        },
        setNavigateToEditToggle: bool => {
            dispatch(setNavigateToEditToggle(bool))
        },
        setIdEditedCar: id => {
            dispatch(setIdEditedCar(id))
        }
    }
}

const ListCarContainer = connect(mapStateToProps, mapDispatchToProps)(ListCarAPI)

export default ListCarContainer