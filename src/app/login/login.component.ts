import { Component, OnInit, Input } from '@angular/core';
import { Logindetails } from '../logindetails';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() public displayLogin: boolean;
  userId = '';
  password = '';
  hide = true;
  loginData = new Logindetails('', '');
  constructor() { }

  ngOnInit(): void {
  }

  captureLoginData() {
    console.log('data:: ', this.loginData.userId, this.loginData.password);
  }

}
