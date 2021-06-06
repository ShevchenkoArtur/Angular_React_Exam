import {connect} from "react-redux";
import ListCarAPI from "./ListCarAPI";
import {
    deleteCar,
    getCars,
    setDeleteToggle,
    setIdEditedCar
} from "../../redux/reducers/carReducer";

const mapStateToProps = state => {
    return {
        cars: state.carsCRUD.cars,
        notificationFlags: state.carsCRUD.notificationFlags
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
        setIdEditedCar: id => {
            dispatch(setIdEditedCar(id))
        }
    }
}

const ListCarContainer = connect(mapStateToProps, mapDispatchToProps)(ListCarAPI)

export default ListCarContainer