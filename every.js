Array.prototype.myEvery = function(foo){
    for(let i = 0; i<this.length; i++){
        if(!foo(this[i],i,this)){
            return false
        }
    }
    return true
}