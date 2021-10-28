function romanConvertor(num) {
let romanResult=''



const romanObj = { 'C':100,'XC':90,'L':50,'XL':40,'X':10,'IX':9,'V':5,'IV':4,'I':1}
Object.entries(romanObj).forEach(entry => {
    let [romanKey,romanValue] = entry
    while (num>0 && romanValue <= num){
        romanResult += romanKey
        num = num-romanValue
    }
})
    return romanResult
}
module.exports = romanConvertor;