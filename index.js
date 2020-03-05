// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
//objects and functions

//object creation with braces
const obj={
id:47,
name:'Aishwarya',
email:'aishwaryasekar98@gmail.com',
location:'Chennai',
age:21,
sex:'female',
   getId:function()
   {
   return this.id;
   },
   setId:function(id)
   {
  this.id=id
   },
   getName:function()
   {
   return this.name;
   },
   setName:function(name)
   {
  this.name=name
   },
   getLocation:function()
   {
   return this.location;
   },
   setLocation:function(location)
   {
  this.location=location
   },
   getEmail:function()
   {
   return this.email;
   },
   setEmail:function(email)
   {
  this.email=email
   },
   getSex:function()
   {
   return this.sex;
   },
   setSex:function(sex)
   {
   this.sex=sex
   }
}
let id=obj.getId();
console.log('ID:',id);
obj.setId(86);
id=obj.getId();
console.log('ID:',id);

let name=obj.getName();
console.log('Name',name);
obj.setName('Sekar');
name=obj.getName();
console.log('Name:',name);

let email=obj.getEmail();
console.log('email:',email);
obj.setEmail('dfghjkl@gmail.com');
email=obj.getEmail();
console.log('email:',email);

let location=obj.getLocation();
console.log('location:',location);
obj.setLocation('pollachi');
location=obj.getLocation();
console.log('ID:',id);

let sex=obj.getSex();
console.log('sex:',sex);
obj.setSex('male');
sex=obj.getSex();
console.log('sex:',sex);

//-----------------------------------------------------------

var n=prompt('Enter the name')


var m1=prompt('enter mark1')
if(isNaN(m1))
{
    alert('Enter only number')
    var m1=prompt('enter mark1')
}
var m2=prompt('enter mark2')
if(isNaN(m2))
{
    alert('Enter only number')
    var m2=prompt('enter mark2')
}

var m3=prompt('enter mark3')
if(isNaN(m3))
{
    alert('Enter only number')
    var m3=prompt('enter mark3')
}

const obj1={
    name:n,
    mark1:m1,
    mark2:m2,
    mark3:m3
}
console.log(obj1)
var sum=obj1.mark1+obj1.mark2+obj1.mark3;
let num1 = parseInt(m1);
let num2 = parseInt(m2);
let num3 = parseInt(m3);
let total = num1+num2+num3;

const obj2={
    name:n,
    total:total
}
console.log(obj2);
let a=parseInt(total);
let b=a/3;
const obj3={
    name:n,
    avg:b
}
console.log(obj3)
let x=parseInt(b);
const obj4={
    name:n,
    avg:x,
    total:total
}
console.log(obj4)