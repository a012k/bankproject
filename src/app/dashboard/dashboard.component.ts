import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  user:''
  acno:any
  psw:any
  amnt:any

  acno1:any
  psw1:any
  amnt1:any


constructor(private ds:DataService){   //initialise dependecy injection

this.user=this.ds.currentUser
}
ngOnInit(): void{

}
deposit(){
  var acno=this.acno
  var psw=this.psw
  var amnt=this.amnt
  const result=this.ds.deposit(acno,psw,amnt)// in if false allthe enth vanatlum it take it as false
  if(result){
    alert(`your ac has been credited with amount ${amnt} and the current balance is ${result}`)
  }
  else{
    alert("incorrect acno or password")
  }

}

// in if give result it will work as true


withdraw(){
  var acno=this.acno1
  var psw=this.psw1
  var amnt=this.amnt1
  const result=this.ds.withdraw(acno,psw,amnt)
  if(result){
    alert(`your ac has been dedited with amount ${amnt} and the current balance is ${result}`)
  }
  else{
    alert("incorrect acno or password")
  }

}
}
