import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() public displayLogin: boolean;
  userId = '';
  constructor() { }

  ngOnInit(): void {
  }

  userName(event: Event) {
    this.userId = (event.target as HTMLInputElement).value;
    console.log('userId::', this.userId);
  }

}
