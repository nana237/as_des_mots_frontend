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
  
  usernameAlreadyExist;
  usernameEmpty;
  emailEmpty;
  emailInvalid;
  passwordEmpty;
  passwordAndConfirmDiferent;
  passwordWeak;
  confirmEmpty;

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

  validateForm(){
    // let valid = false;
    // console.log('validate');
    // if (this.userForm.valid) {
    //   // this.usernameAlreadyExist;
    //   // this.usernameEmpty= this.userForm.get('username').invalid ? true:false;
    //   // this.emailEmpty;
    //   // this.emailInvalid;
    //   // this.passwordEmpty;
    //   // this.passwordAndConfirmDiferent;
    //   // this.passwordWeak;
    //   // this.confirmEmpty;

    //   if (this.userForm.get('username').value == '') {
    //     this.usernameEmpty=true;
    //   }
    //   if (this.userForm.get('email').value=='') {
    //     this.emailEmpty=true;
    //   }
    //   if (this.userForm.get('password1').value==''){
    //     this.passwordEmpty=true;
    //   }
    //   if (this.userForm.get('password2').value==''){
    //     this.confirmEmpty=true;
    //   }

    //   return true
    // }
    // return false
    return true;
  }

  onSubmitForm(){
    console.log("submit");
    if(this.validateForm()){
      console.log(this.userForm);
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
    }else{
      console.log(this.userForm);
      console.log(this.userForm.value);
      console.log( this.userForm.get('username').value);

      console.log( this.userForm.get('username'));
      console.log( this.userForm.controls.email.errors);

    }



    }


}
