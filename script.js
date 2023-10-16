const obj = {
    a: 10,
    b: 20,
    execute() {
        const add = () => {
            return this.a + this.b;
        }
        return add()
    }
}

console.log(obj.execute());