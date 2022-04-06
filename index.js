module.exports = function tiny(str){
    if(typeof str !== 'string') throw new TypeError('Pass a string value');
    return str.replace(/\s/g, '');
}