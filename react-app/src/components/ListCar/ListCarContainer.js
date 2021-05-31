import {connect} from "react-redux";
import ListCarAPI from "./ListCarAPI";
import {getCars} from "../../redux/reducers/carReducer";

const mapStateToProps = state => {
    return {
      cars: state.carsCRUD.cars
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCars: cars => {
            dispatch(getCars(cars))
        }
    }
}

const ListCarContainer = connect(mapStateToProps, mapDispatchToProps)(ListCarAPI)

export default ListCarContainer