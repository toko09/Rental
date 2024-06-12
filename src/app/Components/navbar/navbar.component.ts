import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router, private authService: AuthService) { 
  }

  userInfo$ = this.authService.userInfo;



  swapPages(page: string) { 
    this.router.navigate([page], { queryParamsHandling: 'merge' });
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
