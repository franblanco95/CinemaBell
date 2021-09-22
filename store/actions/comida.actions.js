export const SELECT_COMIDA = 'SELECT_COMIDA';

export const selectComida = (id) => ({
    type: SELECT_COMIDA,
    categoryID: id,
});