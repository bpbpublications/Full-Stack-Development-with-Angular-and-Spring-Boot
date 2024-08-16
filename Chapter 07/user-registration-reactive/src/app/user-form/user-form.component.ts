import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  standalone:true,
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  imports:[ReactiveFormsModule,CommonModule]
})
export class UserFormComponent {
  regiForm= new FormGroup({
    name: new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required]),
    city: new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email],),
    password:new FormControl('',[Validators.required,Validators.minLength(6),
      Validators.maxLength(10)]),
    confirmPassword:new FormControl('',[Validators.required])
  }  ) 
  handleSubmit(){
    
    console.log(this.regiForm.value)

  }
  checkPasswords(val1: any, val2: any){
    
        if(val1!=val2){
          this.regiForm.controls.confirmPassword.setErrors({notEqual:true})
       
        }
     
  }


}










