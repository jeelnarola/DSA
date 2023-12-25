class stack {
    constructor (n){
        this.top=-1;
        this.arr=new Array(n);
        this.size=n;
    }

    add(data){
       if(this.top != this.size-1){
        this.top++;
        this.arr[this.top]=data
       }else{
        return console.log("overflow");
       }
    }
    pop(){
        if(this.top>-1){
            return this.arr[this.top--]=-1
        }
    }

    isEmpty(){
        if(this.top==-1){
            return true
        }
        else{
            return false
        }
    }

    reverse(){
        for(let i=this.arr.length-1; i>=0; i--){  
            this.arr.push(this.arr[i])
        }
    }
}
const stk=new stack()
stk.add("jeel")
stk.add("narola")