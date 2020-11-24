class Stack {
    constructor() {
        this.items = [];
        this.size = 0;
    }

    push(a) {
        this.items.push(a);
        this.size++;
        return this;
    }

    pop() {
        if (this.size !== 0) {
            this.items.pop();
            --this.size;
            return this;
        }
        throw new Error("Stack is empty!");
    }

    isEmpty() {
        return this.size === 0;
    }

    print() {
       return "[" + this.items.join(", ") + "]";
    }

}

window.Stack = Stack;
export default Stack;
