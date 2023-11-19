Array.prototype.myReduce = function(foo,val){
    let acc = !val ? this[0] : val
    let index = !val ? 1 : 0;

    for(let i = index; i<this.length; i++){
        acc = foo(acc, this[i], i, this)
    }
    return acc
}

const num = [1,2,3,4];
const sum = num.myReduce((acc,current)=>{
    return acc + current
}
    
)

console.log(sum)