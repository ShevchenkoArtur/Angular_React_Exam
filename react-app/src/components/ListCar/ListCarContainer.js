import {connect} from "react-redux";
import ListCarAPI from "./ListCarAPI";
import {deleteCar, getCars, setDeleteToggle} from "../../redux/reducers/carReducer";

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
        }
    }
}

const ListCarContainer = connect(mapStateToProps, mapDispatchToProps)(ListCarAPI)

export default ListCarContainer