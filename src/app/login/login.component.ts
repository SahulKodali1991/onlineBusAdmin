import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  @Input() public displayLogin: boolean;
  userId = '';
  password = '';
  hide = true;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      userId: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  ngOnInit(): void {
  }



  captureLoginData() {
    console.log('data:: ');
  }

}
