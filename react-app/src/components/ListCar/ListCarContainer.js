import {connect} from "react-redux";
import ListCarAPI from "./ListCarAPI";
import {deleteCar, getCars} from "../../redux/reducers/carReducer";

const mapStateToProps = state => {
    return {
      cars: state.carsCRUD.cars
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCars: cars => {
            dispatch(getCars(cars))
        },
        deleteCar: id => {
            dispatch(deleteCar(id))
        }
    }
}

const ListCarContainer = connect(mapStateToProps, mapDispatchToProps)(ListCarAPI)

export default ListCarContainer