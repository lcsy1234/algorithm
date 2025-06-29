
var MyStack = function() {
    this.outStack=[]
    this.inStack=[]
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.outStack.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    if(!this.inStack.length){
        this.out2in()
    }
    return this.inStack.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
     if(!this.inStack.length){
        this.out2in()

    }
    return this.inStack[0]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.outStack.length === 0 && this.inStack.length===0
    
};
MyStack.prototype.out2in=function(){
    // while(this.outStack.length){
    //     this.inStack.push(this.outStack.shift())
    // }
    const n=this.outStack.length-1
    for(let i=n;i>=0;i--){
        this.inStack.push(this.outStack[i])
    }
}

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */