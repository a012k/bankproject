import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser:any
  currentAcno:any

  constructor() { }

  userDetails:any={
    1000:{acno:1000,username:"anu",password:"abc123",balance:0,  transaction: []},
    1001:{acno:1001,username:"amal",password:"abc123",balance:0, transaction: []},
    1002:{acno:1002,username:"chinu",password:"abc123",balance:0,transaction: []},
    1003:{acno:1003,username:"ponu",password:"abc123",balance:0,transaction: []},
    1004:{acno:1004,username:"manu",password:"abc123",balance:0,transaction: []}
}
register(uname:any,acno:any,psw:any){
  if(acno in this.userDetails)
{
  return false
}
 else{
  this.userDetails[acno]={acno,username:uname,password:psw,balance:0}       //the acno is same for key and  value so not declare any.
  console.log(this.userDetails);
  
  return true
 }
}

login(acno:any,psw:any)
{

  var userDetails=this.userDetails
  if(acno in userDetails)
  {
    if(psw==userDetails[acno]["password"]){
      this.currentUser=userDetails[acno]["username"]//[]usd bcoz it is a key
this.currentAcno = acno

  return true
    }
    else{
     return  false
    }
  }
  else{
    return false
  }
}

deposit(acnum:any,password:any,amount:any){
  let userDetails=this.userDetails

  var amnt=parseInt(amount)   // convert string to number
  if (acnum in userDetails)
  {
    if(password==userDetails[acnum]["password"]){

userDetails[acnum]["balance"]+=amnt  // update balance

// store transaction data
userDetails[acnum]["transaction"].push({Type:"Credit",amount:amnt})   // calles the given acnum transation details and add a new elemnt to the array

return userDetails[acnum]["balance"] // the balance amount is displayed of entered acnum ie added amnt +current balance

    }
    else{
      return false
    }
  }
  else{
    return false
  }
}



withdraw(acnum:any,password:any,amount:any){
  let userDetails=this.userDetails

  var amnt=parseInt(amount)   // convert string to number
  if (acnum in userDetails)
  {
    if(password==userDetails[acnum]["password"]){
      if(amnt<userDetails[acnum]["balance"]){

userDetails[acnum]["balance"] -= amnt  // update balance
//store debit amnt

userDetails[acnum]["transaction"].push({Type:"Debit",amount:amnt})

console.log(userDetails);


return userDetails[acnum]["balance"] // balance return
      }
    else{
      alert(`insuffient balance`)
      return false
    }
  }
  else{
    alert(`incorrect password`)
    return false
  }
}
else{
  alert(`incorect acno`)

  return false
}
}

getTransaction(acno:any){

  return this.userDetails[acno]["transaction"]
}

}
