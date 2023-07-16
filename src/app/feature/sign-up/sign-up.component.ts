import { Component } from '@angular/core';
import { FormBuilder,  FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signUpForm:FormGroup;

  constructor(private fb: FormBuilder){
    this.signUpForm = this.fb.group({
      email: ['',Validators.required],
      zipCode: [''],
    })
  }

  submit(){
    alert("Successful");
  }
}
