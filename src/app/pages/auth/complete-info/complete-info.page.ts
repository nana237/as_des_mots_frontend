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

  onSubmitForm(){
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
        this.router.navigateByUrl('connexion');
      },
      error=>{console.warn(error)},
      )


  }
}
