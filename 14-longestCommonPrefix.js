// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""

let strs = ["flower","flow","flight"]

var longestPrefix = function(strs){
    if(!strs.length)return ''
    let prefix = ''
    let maxPreLen = Math.min(...strs.map(str=>str.length))
    // console.log('max is:', Math.min(6, 4, 6 ))
    for(let i=0; i<maxPreLen; i++){
        let char = strs[0][i]
        if(strs.every(str=>str[i] === char)){
            prefix += char
        }else{
            break
        }
    }
    return prefix
}
// console.log(longestPrefix(strs))

var longest = function(strs){
    if(!strs.length){return ''}
    for(let i=0; i<strs[0].length; i++){
        for(let str of strs){
            if(str[i]!==strs[0][i]){
                return str.slice(0, i)
            }
        }
    }
    return strs[0]
}
console.log(longest(strs))
