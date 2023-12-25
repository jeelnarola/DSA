const Isvalid=(s)=>{
    let stack=[];
    // console.log(s);
    for (let i=0;i<s.length;i++){
        let top=stack[stack.length-1];
        if(s[i]==="(" || s[i]==="{"|| s[i]==="[" ){
            stack.push(s[i])
        }
        else if(s[i]===")"&&top==="("  || s[i]==="}"&&top==="{" || s[i]==="]"&&top==="[" || stack.length!==0){
        
            stack.pop()
        }else{
            return false;
        }
    }
    if(stack.length==0){
        return console.log(`${s} :--> Valid`);
    }

    if(stack.length >0){
        console.log(false);
        return console.log(`${s} :--> Not Valid`);
    }

}

Isvalid("()")