import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.scroll();
  }

  scroll() {
    if (
      document.body.scrollTop > 600 ||
      document.documentElement.scrollTop > 600
    ) {
      let id = document.getElementById('nav');
      if (id) {
        id.style.backgroundColor = '#5f2ce1cf'; 
        id.style.transition = 'all 0.3s ease-in-out'; 
      } 
    } else {
      let id = document.getElementById('nav');
      if (id) {
        id.style.backgroundColor = 'transparent';
      }
    }
  }
}
