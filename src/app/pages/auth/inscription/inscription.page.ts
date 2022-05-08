import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { FeatureService } from '../../../services/feature.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  userForm: FormGroup;
  mydata;
  constructor(
    private formBuilder: FormBuilder,
    private auth_: AuthService,
    private feature_: FeatureService,
    private router: Router,

  ) { }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // datenaiss: ['', [Validators.required, Validators.min(0)]],
      password1: ['', Validators.required],
      password2:['', Validators.required ]
    });

  }

  onSubmitForm(){
    console.log("submit");
    console.log(this.userForm.value);
    console.log( this.userForm.get('username').value);

    let formValue= {
      username: this.userForm.get('username').value,
      email: this.userForm.get('email').value,
      password1: this.userForm.get('password1').value,
      password2: this.userForm.get('password2').value
    }

    let formdata: FormData;
    // formdata= this.feature_.toFormdata(this.userForm.value);
    formdata= this.feature_.toFormdata(formValue);
    // console.log(formdata.value)
    console.log( formdata.get('username'))
    formdata.forEach((fValue, fKey)=>{console.log(fValue, fKey)});

    this.auth_.register(formdata).subscribe(
      data=>{
        console.log(data);
        this.mydata = data;
        if(this.mydata.user){
          this.auth_.userdata=this.mydata.user;
          this.router.navigateByUrl('complete-info');
        }
      },
      error=>{console.warn(error)},
      )

    }


}
