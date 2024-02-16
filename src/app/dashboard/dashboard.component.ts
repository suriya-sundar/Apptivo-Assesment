import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  showFiller = false;
  isDropdownOpen: boolean = false;
  isDropdownOpen2: boolean = false;


  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  toggleDropdown2() {
    this.isDropdownOpen2 = !this.isDropdownOpen2;
  }
}
