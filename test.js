
function firstUniqueChar(str){
    return new Set(str).size === str.length;
}


function secondUniqueChar(str){
    myArr = []
    for(let v of str)
    if(!myArr.includes(v)) myArr.push(v)
    else return false
    return true;
}



let f_start = new Date().getMilliseconds()
firstUniqueChar('abbcccd')
let f_end = new Date().getMilliseconds()

let s_start =new Date().getMilliseconds()
secondUniqueChar('abbcccd')
let s_end = new Date().getMilliseconds()

console.log(`Run time for first is: ${f_end - f_start}ms.`)
console.log(`Run time for second is: ${s_end - s_start}ms.`)