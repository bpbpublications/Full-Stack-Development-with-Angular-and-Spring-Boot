import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { FormField } from 'src/assets/form-field';

@Component({
  standalone:true,
  selector: 'app-form-dynamic',
  templateUrl: './form-dynamic.component.html',
  styleUrls: ['./form-dynamic.component.css'],
 
  imports:[ReactiveFormsModule,CommonModule,HttpClientModule]
})
export class FormDynamicComponent implements OnInit{
  formFields!: FormField[];
      dynform = new FormGroup({});
 constructor(private httpClient:HttpClient){

 }
 
  ngOnInit(): void {
    this.httpClient.get<FormField[]>("/assets/form-fields.json").
    subscribe((formFields)=>
     {
          for(const formField of formFields){
                this.dynform.addControl(formField.fieldName, new FormControl('',[this.getValidator(formField)]));
                           console.log(this.getValidator(formField));                                       
        
              }
        this.formFields=formFields;

     })
    }
  onSubmit():void {

  }
  private getValidator(formField: FormField): ValidatorFn {
    switch(formField.validator) {
    case "email":
    return Validators.email;
    case "required":
    return Validators.required;
    default:
    return Validators.nullValidator;
    }
    }
  

}
