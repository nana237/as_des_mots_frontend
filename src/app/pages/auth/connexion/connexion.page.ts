import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { FeatureService } from '../../../services/feature.service';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  userForm: FormGroup
  mydata;

  emptyUserName;
  emptyPassword;
  invalidCredential;

  loading=false;


  constructor(
    private formBuilder: FormBuilder,
    private auth_: AuthService,
    private feature_: FeatureService,
    private router: Router,
    private storage_: StorageService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.userForm = this.formBuilder.group({
      username : ['', Validators.required],
      password : ['', Validators.required]
    });
  }

  validateForm(){
    console.log('validate');
    if (this.userForm.invalid) {

      // emptyUserName;
      // emptyPassword;
      // invalidCredential;

      if (this.userForm.get('username').value == '') { this.emptyUserName=true; } else { this.emptyUserName=false }
      if (this.userForm.get('password').value=='') {  this.emptyPassword=true;  } else { this.emptyPassword=false }

      return false;
    }
    this.emptyUserName=false
    this.emptyPassword=false
    return true;
  }

  onSubmitForm(){
    if (this.validateForm() && !this.loading) {
      this.loading=true;
      this.auth_.login(this.userForm.value).subscribe(
        data=>{
          console.log(data);
          this.mydata = data;
          console.log('before');
          console.log(this.auth_.userdata);
          if(this.mydata.user){
            this.auth_.userdata=this.mydata.user;
            this.auth_.connected=true;
            this.router.navigateByUrl('accueil');
          }
          this.loading=false;
          console.log('after');
          console.log(this.auth_.userdata);

          this.storage_.store('userdata', data);
          this.storage_.get('userdata').then(val=>{
            console.log('receive promise');
            console.log(val);
          })
        },
        error=>{
          console.warn(error)
          this.loading=false;
          this.invalidCredential=true;
        },
        )
    }else{
      console.log("invalide form \n not submited");

    }

  }


}
