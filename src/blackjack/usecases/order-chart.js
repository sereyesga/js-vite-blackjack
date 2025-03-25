/**
 * Esta función permite tomar una carta
 * @param {Array<String>} deck Es un arreglo de string 
 * @returns {String} Retorna la carta y la elimina de la baraja
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw new Error('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}