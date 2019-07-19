import * as types from '../actionsTypes';

export const measureUpdateRequest = (payload, id) => ({
    type: types.MEASURE_UPDATE_REQUEST,
    payload,
    id: parseInt(id)
});

export const measureUpdateFail = () => ({
    type: types.MEASURE_UPDATE_FAIL
});

export const measureUpdateSuccess = () => ({
    type: types.MEASURE_UPDATE_SUCCESS,
});