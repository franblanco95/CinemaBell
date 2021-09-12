export const SELECT_PELICULA = 'SELECT_PELICULA';

export const selectPelicula = (id) => ({
    type: SELECT_PELICULA,
    categoryID: id,
});