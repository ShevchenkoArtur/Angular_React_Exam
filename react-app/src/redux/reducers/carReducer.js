const DELETE_CAR = 'DELETE_CAR'
const GET_CARS = 'GET_CARS'
const UPDATE_INPUT_VALUES = 'UPDATE_INPUT_VALUES'
const RESET_INPUTS = 'RESET_INPUTS'
const SET_DELETE_TOGGLE = 'SET_DELETE_TOGGLE'
const SET_ADD_TOGGLE = 'SET_ADD_TOGGLE'
const SET_EDITED_CAR_ID = 'SET_EDITED_CAR_ID'


const initialState = {
    cars: [],

    inputControl: {
        brandInput: {
            value: '',
            name: 'brandInput'
        },
        modelInput: {
            value: '',
            name: 'modelInput'
        },
        yearInput: {
            value: '',
            name: 'yearInput'
        },
        priceInput: {
            value: '',
            name: 'priceInput'
        }
    },

    notificationFlags: {
        isDelete: false,
        isEdit: false,
        isAdd: false
    }
}

const carReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_CARS:
            return {
                ...state,
                cars: action.cars
            }
        case DELETE_CAR:
            return {
                ...state,
                cars: state.cars.filter(car => car.id !== action.id)
            }
        case UPDATE_INPUT_VALUES:
            switch (action.inputName) {
                case state.inputControl.brandInput.name:
                    return {
                        ...state,
                        inputControl: {
                            ...state.inputControl,
                            brandInput: {
                                ...state.inputControl.brandInput,
                                value: action.newValue
                            }
                        }
                    }
                case state.inputControl.modelInput.name:
                    return {
                        ...state,
                        inputControl: {
                            ...state.inputControl,
                            modelInput: {
                                ...state.inputControl.modelInput,
                                value: action.newValue
                            }
                        }
                    }
                case state.inputControl.yearInput.name:
                    return {
                        ...state,
                        inputControl: {
                            ...state.inputControl,
                            yearInput: {
                                ...state.inputControl.yearInput,
                                value: action.newValue
                            }
                        }
                    }
                case state.inputControl.priceInput.name:
                    return {
                        ...state,
                        inputControl: {
                            ...state.inputControl,
                            priceInput: {
                                ...state.inputControl.priceInput,
                                value: action.newValue
                            }
                        }
                    }
                default:
                    return state;
            }

        case RESET_INPUTS:
            return {
                ...state,
                inputControl: {
                    ...state.inputControl,
                    brandInput: {
                        ...state.inputControl.brandInput,
                        value: ''
                    },
                    modelInput: {
                        ...state.inputControl.modelInput,
                        value: ''
                    },
                    yearInput: {
                        ...state.inputControl.yearInput,
                        value: ''
                    },
                    priceInput: {
                        ...state.inputControl.priceInput,
                        value: ''
                    }
                }
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

export const updateInputValues = (inputName, newValue) => ({type: UPDATE_INPUT_VALUES, inputName, newValue})

export const resetInputs = () => ({type: RESET_INPUTS})
export const setDeleteToggle = bool => ({type: SET_DELETE_TOGGLE, bool})
export const setAddToggle = bool => ({type: SET_ADD_TOGGLE, bool})
export const setIdEditedCar = id => ({type: SET_EDITED_CAR_ID, id})


export default carReducer