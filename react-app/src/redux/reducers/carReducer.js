const DELETE_CAR = 'DELETE_CAR'
const GET_CARS = 'GET_CARS'
const UPDATE_ADD_CAR_INPUT_VALUES = 'UPDATE_ADD_CAR_INPUT_VALUES'
const RESET_INPUTS = 'RESET_INPUTS'
const SET_DELETE_TOGGLE = 'SET_DELETE_TOGGLE'
const SET_ADD_TOGGLE = 'SET_ADD_TOGGLE'
const SET_NAVIGATE_TO_EDIT_TOGGLE = 'SET_NAVIGATE_TO_EDIT_TOGGLE'
const SET_EDITED_CAR_ID = 'SET_EDITED_CAR_ID'


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
    },

    notificationFlags: {
        isDelete: false,
        isEdit: false,
        isAdd: false
    },

    navigateToEdit: false,

    editedCarId: null
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
        case RESET_INPUTS:
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
        case SET_DELETE_TOGGLE:
            return {
                ...state,
                notificationFlags: {
                    isDelete: action.bool
                }
            }
        case SET_ADD_TOGGLE:
            return {
                ...state,
                notificationFlags: {
                    isAdd: action.bool
                }
            }
        case SET_NAVIGATE_TO_EDIT_TOGGLE:
            return {
                ...state,
                navigateToEdit: action.bool
            }
        case SET_EDITED_CAR_ID:
            return {
                ...state,
                editedCarId: action.id
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

export const resetInputs = () => ({type: RESET_INPUTS})
export const setDeleteToggle = bool => ({type: SET_DELETE_TOGGLE, bool})
export const setAddToggle = bool => ({type: SET_ADD_TOGGLE, bool})
export const setNavigateToEditToggle = bool => ({type: SET_NAVIGATE_TO_EDIT_TOGGLE, bool})
export const setIdEditedCar = id => ({type: SET_EDITED_CAR_ID, id})

export default carReducer