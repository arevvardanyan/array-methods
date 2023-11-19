Array.prototype.myFind = function(foo){
    for(let i = 0; i<this.length; i++){
        if(foo(this[i],i,this)){
            return this[i]
        }
    }
    return undefined
}

const num = [1,2,3,4]
const foundNum = num.myFind((el)=>{
    return el >= 2
})
console.log(foundNum)