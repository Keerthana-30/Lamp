//classes - not hoisted,to create objects of the same kind,cant be redeclared
//class declaration
// class Employee  {   
//     constructor(id,name)  
//     {  
//       this.id=id;  
//       this.name=name;  
//     }  
//     detail()  
//     {  
//         console.log(this.id+" "+this.name);  
//     }  
//   }  

// var e1=new Employee(10,"mary");  
// var e2=new Employee(101,"keerth");  
// e1.detail(); //calling method  
// e2.detail();  


//class expression
class A{
    b=10;
    constructor(a)
    {
      this.a = a;
    }
  
    xyz = () =>
    {
      console.log(this.a);
      console.log(this.b);
    }
  
    pqr()
    {
      console.log(this.a);
    }
    
}
var obj = new A(5);
obj.xyz();