export const setTokenAuth = (data) => {
    sessionStorage.setItem('token', data);
    return {
        message: 'Token saved success',
        error: false
    }
};

export const getTokenAuth = () => ({
    message: 'Token loaded success',
    error: false,
    token: sessionStorage.getItem('token')
});

export const delTokenAuth = () => {
    sessionStorage.clear();
    return {
        message: 'Token deleted success',
        error: false
    }
};