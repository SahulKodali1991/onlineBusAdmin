import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public loginSelected = false;
  constructor() { }

  ngOnInit(): void {
  }

  displayProfile() {
    this.loginSelected = true;
  }

  logout() {
    this.loginSelected = false;
  }

}
