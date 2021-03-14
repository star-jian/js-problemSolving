var input = "()[]{}{"

var isValid = function(s){
    const stack = []
    for(let i=0; i<s.length; i++){
        let c = s.charAt(i)
        switch(c){
            case '(': stack.push(')')
            break
            case '[': stack.push(']')
            break
            case '{': stack.push('}')
            break
            default:
                if(c!==stack.pop()){
                    return false
                }
        }
    }
    return stack.length === 0
}
console.log(isValid(input))

var valid = function(s){
    const openMap = new Map([
        ['(', ')'],
        ['[', ']'],
        ['{', '}'],
      ])
    const closeMap = new Map([
        [')', '('],
        [']', '['],
        ['}', '{'],
      ])
    const stack = []
    for(let i=0; i<s.length; i++){
        if(openMap.get(s[i])){
            stack.push(s[i])
        }else{
            const item = stack.pop()
            if(item !== closeMap.get(s[i])){
                return false
            }
        }
    }
}

valid(input)
