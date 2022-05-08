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
  constructor(
    private formBuilder: FormBuilder,
    private auth_: AuthService,
    private feature_: FeatureService,
    private router: Router,
    // private storage_: StorageService
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

  onSubmitForm(){
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
        console.log('after');
        console.log(this.auth_.userdata);

        // this.storage_.store('userdata', data);
        // this.storage_.get('userdata').then(val=>{
        //   console.log('receive promise');
        //   console.log(val);
        // })
      },
      error=>{console.warn(error)},
      )
  }


}
