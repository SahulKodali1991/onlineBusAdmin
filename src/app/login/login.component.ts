import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  @Input() public displayLogin: boolean;
  userId = '';
  password = '';
  hide = true;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      userId: [
        null,
        Validators.compose([Validators.required, Validators.email]),
      ],
      password: [
        null,
        Validators.compose([
          Validators.required,
          Validators.min(10),
          Validators.max(12),
        ]),
      ],
    });
  }

  ngOnInit(): void {}

  captureLoginData() {
    const val = this.form.value;
    console.log('data:: ', val.userId, val.password);
  }
}
