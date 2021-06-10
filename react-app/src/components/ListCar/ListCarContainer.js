import {connect} from "react-redux";
import ListCarAPI from "./ListCarAPI";
import {
    deleteCar,
    getCars,
    setDeleteNotificationToggle,
    setEditedCarId
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
        setDeleteNotificationToggle: bool => {
            dispatch(setDeleteNotificationToggle(bool))
        },
        setEditedCarId: id => {
            dispatch(setEditedCarId(id))
        }
    }
}

const ListCarContainer = connect(mapStateToProps, mapDispatchToProps)(ListCarAPI)

export default ListCarContainer