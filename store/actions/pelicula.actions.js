export const SELECT_PELICULA = 'SELECT_PELICULA';

export const selectPelicula = (peliculaId) => ({
    type: SELECT_PELICULA,
    peliculaId,
});