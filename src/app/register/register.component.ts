import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private ds:DataService,private router:Router) {}// 2nd one for dep.inj as redirect ti login
  ngOnInit(): void{
    
}
uname=``
acno=``
psw=``


register (){// regiter button funtion

var uname=this.uname
 var acno=this.acno
 var psw=this.psw

 const result=this.ds.register(uname,acno,psw)//calles the result of new registration details in Userdetails as variable "result".ie the register function calls here is declared at data service
 if (result){
  alert('registerd')
  this.router.navigateByUrl('')// redirect to login so the url make empty'' bcoz the login pathis empty.
  
 }
 else{
  alert("acno already present")
 }

}
}