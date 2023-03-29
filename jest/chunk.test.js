const chunkArray = require('./chunk')

test('couper le tableau en parties de "len" nombres de nombres', () => {

    const number = [1,2,3,4,5,6,7,8,9];
    const len = 3;


    expect(chunkArray(number,len)).toEqual([[1,2,3],[4,5,6],[7,8,9]]);
})