/**
 * Función que obtiene el valor de la carta
 * @param {String} carta Carta de tipo string
 * @returns {Number} Valor de la carta
 */
export const valorCarta = ( carta ) => {
    
    if (!carta || carta.length === 0) throw new Error('La carta es obligatoria y debe ser de tipo String')

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}