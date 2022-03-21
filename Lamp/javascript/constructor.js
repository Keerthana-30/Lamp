
function User(){
    this.name="keerthu"
    return {1:"hello"};//here return overrides this by returning an object
}

let user1 = new User();
console.log(user1);//User { name: 'keerthu' }