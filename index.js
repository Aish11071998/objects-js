// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
//objects and functions
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
obj.setEmail('dfghjkl');
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
