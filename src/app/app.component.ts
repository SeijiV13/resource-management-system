import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resource-management-system';
  signedIn = false;
  constructor(private authService: AuthService, private afAuth: AngularFireAuth){
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.signedIn = true;
      } else {
        this.signedIn = false;

      }
    });
  }

  logout() {
    this.authService.signOut();
  }
}
