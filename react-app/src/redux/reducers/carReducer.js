const DELETE_CAR = 'DELETE_CAR'
const GET_CARS = 'GET_CARS'
const UPDATE_ADD_CAR_INPUT_VALUES = 'UPDATE_ADD_CAR_INPUT_VALUES'
const RESET_INPUT = 'RESET_INPUT'

const initialState = {
    cars: [],

    addCarInputInfo: {
        value: {
            brand: '',
            model: '',
            year: '',
            price: ''
        },
        name: {
            brand: 'addBrand',
            model: 'addModel',
            year: 'addYear',
            price: 'addPrice'
        },
    }
}

const carReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_CARS:
            return {
                ...state,
                cars: action.cars
            }
        case UPDATE_ADD_CAR_INPUT_VALUES:
            switch (action.inputName) {
                case state.addCarInputInfo.name.brand:
                    return {
                        ...state,
                        addCarInputInfo: {
                            ...state.addCarInputInfo,
                            value: {
                                ...state.addCarInputInfo.value,
                                brand: action.newValue
                            }
                        }
                    }
                case state.addCarInputInfo.name.model:
                    return {
                        ...state,
                        addCarInputInfo: {
                            ...state.addCarInputInfo,
                            value: {
                                ...state.addCarInputInfo.value,
                                model: action.newValue
                            }
                        }
                    }
                case state.addCarInputInfo.name.year:
                    return {
                        ...state,
                        addCarInputInfo: {
                            ...state.addCarInputInfo,
                            value: {
                                ...state.addCarInputInfo.value,
                                year: action.newValue
                            }
                        }
                    }
                case state.addCarInputInfo.name.price:
                    return {
                        ...state,
                        addCarInputInfo: {
                            ...state.addCarInputInfo,
                            value: {
                                ...state.addCarInputInfo.value,
                                price: action.newValue
                            }
                        }
                    }
                default:
                    return state;
            }
        case RESET_INPUT:
            return {
                ...state,
                addCarInputInfo: {
                    ...state.addCarInputInfo,
                    value: {
                        ...state.addCarInputInfo.value,
                        brand: '',
                        model: '',
                        year: '',
                        price: ''
                    }
                }
            }
        case DELETE_CAR:
            return {
                ...state,
                cars: state.cars.filter(car => car.id !== action.id)
            }
        default:
            return state
    }
}

export const getCars = cars => ({type: GET_CARS, cars})

export const deleteCar = id => ({type: DELETE_CAR, id})

export const updateAddCarInputValues = (inputName, newValue) => {
    return {
        type: UPDATE_ADD_CAR_INPUT_VALUES,
        inputName,
        newValue
    }
}

export const resetInput = () => ({type: RESET_INPUT})

export default carReducer