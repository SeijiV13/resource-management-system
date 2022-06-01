import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resource-management-system';
  constructor(private authService: AuthService){}

  logout() {
    this.authService.signOut();
  }
}
