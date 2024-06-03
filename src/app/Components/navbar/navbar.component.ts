import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router:Router) { 

  }

  swapPages(page: string) { 
    this.router.navigate([page], { queryParamsHandling: 'merge' });
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
