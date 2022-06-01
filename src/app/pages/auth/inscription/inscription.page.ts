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
  otherusernameError;
  emailEmpty;
  emailAlreadyExist;
  emailInvalid;
  otherEmailError;
  passwordEmpty;
  passwordAndConfirmDiferent;
  passwordWeak;
  passwordToCommun;
  otherPasswordError;
  confirmEmpty;

  loading=false;

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
    let valid = false;
    console.log('validate');
    if (this.userForm.invalid) {
      // this.usernameAlreadyExist;
      //- this.usernameEmpty= this.userForm.get('username').invalid ? true:false;
      //- this.emailEmpty;
      // emailAlreadyExist;
      //- this.emailInvalid;
      //- this.passwordEmpty;
      //- this.passwordAndConfirmDiferent;
      //- this.passwordWeak;
      // passwordToCommun;
      //- this.confirmEmpty;

      if (this.userForm.get('username').value == '') { this.usernameEmpty=true; } else { this.usernameEmpty=false }
      if (this.userForm.get('email').value=='') {  this.emailEmpty=true;  } else { this.emailEmpty=false }
      if (this.userForm.get('email').invalid && !this.emailEmpty) {  this.emailInvalid=true;  } else { this.emailInvalid=false }
      if (this.userForm.get('password1').value==''){  this.passwordEmpty=true;  } else { this.passwordEmpty=false }
      if (this.userForm.get('password2').value==''){this.confirmEmpty=true; } else { this.confirmEmpty=false }
      if (!this.passwordEmpty && !this.confirmEmpty && this.userForm.get('password1').value!=this.userForm.get('password2').value){   this.passwordAndConfirmDiferent=true; } else { this.passwordAndConfirmDiferent=false }

      return false;
    }
    return true;
  }

  onSubmitForm(){
    console.log("submit");
    if(this.validateForm() && !this.loading){
      this.loading=true;
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
          this.loading=false;
          if(this.mydata.user){
            this.auth_.userdata=this.mydata.user;
            this.router.navigateByUrl('complete-info');
          }
        },
        error=>{
          this.loading=false;
          console.warn(error);
          if(error.error.password1.length>0){
            let causeErrorFound=false;
            if(error.error.password1[0]=='This password is too short. It must contain at least 8 characters.')
            {
              this.passwordWeak=true;
              causeErrorFound=true;
            }else{
              this.passwordWeak=false;
            }
            if(error.error.password1[0]=='This password is too common.'){
              this.passwordToCommun=true;
              causeErrorFound=true;
            }else{
              this.passwordToCommun=false;
            }

            if(!causeErrorFound){
              this.otherPasswordError=true;
            }else{
              this.otherPasswordError=false;
            }
          }else{
            this.passwordWeak=false;
            this.passwordToCommun=false;
            this.otherPasswordError=false;
          }

          if (error.error.username.length>0) {
            let causeErrorFound=false;
            if(error.error.username[0]=='A user with that username already exists.')
            {
              this.usernameAlreadyExist=true;
              causeErrorFound=true;
            }else{
              this.usernameAlreadyExist=false;
            }


            if(!causeErrorFound){
              this.otherusernameError=true;
            }else{
              this.otherusernameError=false;
            }
          }else{
            this.usernameAlreadyExist=false;
            this.otherusernameError=false;
          }

          if (error.error.email.length>0) {
            let causeErrorFound=false;
            if(error.error.email[0]=='A user is already registered with this e-mail address.')
            {
              this.emailAlreadyExist=true;
              causeErrorFound=true;
            }else{
              this.emailAlreadyExist=false;
            }

            if(!causeErrorFound){
              this.otherEmailError=true;
            }else{
              this.otherEmailError=false;
            }
          }else{
            this.emailAlreadyExist=false;
            this.otherEmailError=false;
          }
       
          // this.usernameAlreadyExist;
          //  if (this.userForm.get('username').value == '') { this.usernameEmpty=true; } else { this.usernameEmpty=false }
          // emailAlreadyExist;
          // this.passwordWeak;

        },
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
