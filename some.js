Array.prototype.mySome = function(foo){
    for(let i = 0; i<this.length; i++){
        if(foo(this[i],i,this)){
            return true
        }
    }
    return false
}

const arr = [1,2,3,4,5];
const  foo = arr.mySome((el)=>{
    return el >= 5
})

console.log(foo)