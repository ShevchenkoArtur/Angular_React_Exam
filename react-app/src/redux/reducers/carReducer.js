const GET_CARS = 'GET_CARS'
const UPDATE_ADD_CAR_INPUT_VALUES = 'UPDATE_ADD_CAR_INPUT_VALUES'

const initialState = {
    cars: [],

    addCarInputSettings: {
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

const carReducer = (state=initialState, action) => {

    switch (action.type) {
        case GET_CARS:
            return {
                ...state,
                cars: action.cars
            }
        case UPDATE_ADD_CAR_INPUT_VALUES:
            // switch(action.inputName) {
            //     case state.addCarInputSettings.name.brand:
            //         return {
            //             ...state,
            //             addCarInputSettings: {
            //                 ...state.addCarInputSettings,
            //                 value: {
            //                     ...state.value,
            //                     brand: action.newValue
            //                 }
            //             }
            //         }
            //     case state.addCarInputSettings.name.model:
            //         return {
            //             ...state,
            //             addCarInputSettings: {
            //                 ...state.addCarInputSettings,
            //                 value: {
            //                     ...state.value,
            //                     model: action.newValue
            //                 }
            //             }
            //         }
            //     case state.addCarInputSettings.name.year:
            //         return {
            //             ...state,
            //             addCarInputSettings: {
            //                 ...state.addCarInputSettings,
            //                 value: {
            //                     ...state.value,
            //                     year: action.newValue
            //                 }
            //             }
            //         }
            //     case state.addCarInputSettings.name.price:
            //         return {
            //             ...state,
            //             addCarInputSettings: {
            //                 ...state.addCarInputSettings,
            //                 value: {
            //                     ...state.value,
            //                     price: action.newValue
            //                 }
            //             }
            //         }
            //     default:
            //         return state
            // }
            if (action.inputName === 'addModel') {
                return {
                    ...state,
                    addCarInputSettings: {
                        value: {
                            ...state.addCarInputSettings.value,
                            model: action.newValue
                        }
                    }
                }
            }
        default:
            return state
    }
}

export const getCars = cars => ({type: GET_CARS, cars})

export const updateAddCarInputValues = (inputName, newValue) => {
    return {
        type: UPDATE_ADD_CAR_INPUT_VALUES,
        inputName,
        newValue
    }
}

export default carReducer