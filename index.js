module.exports = function tiny(str){
    if(typeof str !== 'string') throw new TypeError('Pass a string value');
    return '_'+str.replace(/\s/g, '')+'_';
}