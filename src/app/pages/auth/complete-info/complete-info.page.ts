import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { FeatureService } from '../../../services/feature.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-complete-info',
  templateUrl: './complete-info.page.html',
  styleUrls: ['./complete-info.page.scss'],
})
export class CompleteInfoPage implements OnInit {

  userForm: FormGroup;
  mydata;
  account_id;
  emptyName;
  emptyOrganisation;
  emptyLevel;
  emptyGender;
  emptyTown;

  loading=false;


  constructor(
    private formBuilder: FormBuilder,
    private auth_: AuthService,
    private feature_: FeatureService,
    private router: Router
  ) { }

  ngOnInit() {
    if(this.auth_.userdata){
      if(this.auth_.userdata.pk){
        this.account_id=this.auth_.userdata.pk
      }else{
        this.account_id='';
      }
    }else{
      this.account_id='';
    }
    this.initForm()
  }

//   {
//     "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUzOTk1ODMxLCJqdGkiOiI1MWI0MDBlMTVlNTE0NmM4YmUxYmYxMWY2ZDJlMWU5MSIsInVzZXJfaWQiOjJ9.Eh-syDWcfPE2lt3tR7AiLyJx16nFB6i9Ve1cV2SPmIo",
//     "refresh_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY1NDYwMDMzMSwianRpIjoiY2ZiNTc1NTYyMWFiNGVmNGJiZWI4NTE2MDVmYjg0ODgiLCJ1c2VyX2lkIjoyfQ.6zFdjAqzaFABJVXoC5TnKRJ9OrqwbGZ-aPP3srCLF78",
//     "user": {
//         "pk": 2,
//         "username": "test2",
//         "email": "test@test.com",
//         "first_name": "",
//         "last_name": ""
//     }
// }
// {
//   "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU0MDc2MDQ5LCJqdGkiOiJjY2U1NTcyZWZlMzE0OGRjOGUyYjI4NmYyMjMwOGNhNCIsInVzZXJfaWQiOjN9.Wkp-oEvt6mMHoFv2XVMQt1a2ec0XgYThpH5nmyaPoGc",
//   "refresh_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY1NDY4MDU0OSwianRpIjoiMjM5NWY2YmVkMjk1NGVhYWJmMmQ2MGRmNzQwNWFmYTgiLCJ1c2VyX2lkIjozfQ.FGLWnE4fxiBaxinSvCEPwZfmZcbcWXJWFWusN-4xOWA",
//   "user": {
//       "pk": 3,
//       "username": "test",
//       "email": "test@test.test",
//       "first_name": "",
//       "last_name": ""
//   }
// }

  initForm() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      organization: [''],
      level: ['', Validators.required],
      genre: ['', Validators.required],
      town: ['', Validators.required],
      personType: ['ELEVE'],
      account: [this.account_id],
    });
  }

  validateForm(){
    console.log('validate');
    if (this.userForm.invalid) {
      //- emptyName;
      // emptyOrganisation;
      //- emptyLevel;
      // emptyGender;
      // emptyTown;

      if (this.userForm.get('name').value == '') { this.emptyName=true; } else { this.emptyName=false }
      if (this.userForm.get('level').value=='') {  this.emptyLevel=true;  } else { this.emptyLevel=false }
      if (this.userForm.get('genre').value==''){  this.emptyGender=true;  } else { this.emptyGender=false }
      if (this.userForm.get('town').value==''){this.emptyTown=true; } else { this.emptyTown=false }

      return false;
    }
    return true;
  }

  onSubmitForm(){

    if (this.validateForm() && !this.loading) {
      this.loading=true;
      console.log("submit");
      console.log(this.userForm.value);
  
      console.log( this.userForm.get('name').value);
       // let formValue= {
    //   username: this.userForm.get('username').value,
    //   email: this.userForm.get('email').value,
    //   password1: this.userForm.get('password1').value,
    //   password2: this.userForm.get('password2').value
    // }

    let formdata: FormData;
    formdata= this.feature_.toFormdata(this.userForm.value);
    // formdata= this.feature_.toFormdata(formValue);
    // console.log(formdata.value)
    console.log( formdata.get('username'))
    formdata.forEach((fValue, fKey)=>{console.log(fValue, fKey)});

    this.auth_.completeInfo(this.userForm.value).subscribe(
      data=>{
        console.log('inside subscribe');
        console.log(data);
        this.auth_.userCompleteData=data;
        this.loading=false;
        this.router.navigateByUrl('connexion');
    },
      error=>{
        console.warn(error)
        this.loading=false;
      },
      )
    }else{

      console.log("not submited");
      if (this.loading) {
        console.log(this.loading);
      }
    }
  }
}
