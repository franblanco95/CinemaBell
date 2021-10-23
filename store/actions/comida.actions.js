export const SELECT_COMIDA = 'SELECT_COMIDA';

export const selectComida = (comidaId) => ({
    type: SELECT_COMIDA,
    comidaId,
});