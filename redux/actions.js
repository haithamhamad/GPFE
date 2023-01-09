export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_PASS = 'SET_USER_PASS';


const API_URL = 'https://mocki.io/v1/48419bdb-1d76-45a1-89cb-3ac3fcc7f6ca';

export const getCities = () => {
    try {
        return async dispatch => {
            const result = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const json = await result.json();
            if (json) {
                dispatch({
                    type: GET_CITIES,
                    payload: json
                });
            } else {
                console.log('Unable to fetch!');
            }
        }
    } catch (error) {
        console.log(error);
    }
}

export const setName = name => dispatch => {
    dispatch({
        type: SET_USER_NAME,
        payload: name,
    });
};

export const setPass = pass => dispatch => {
    dispatch({
        type: SET_USER_PASS,
        payload: pass,
    });
};

