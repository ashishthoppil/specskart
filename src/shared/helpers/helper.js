export const setOrGetItem = (key, value) => {
    if (value === undefined) {
       return localStorage.getItem(key);
    } else {
       localStorage.setItem(key, value);
    }
};