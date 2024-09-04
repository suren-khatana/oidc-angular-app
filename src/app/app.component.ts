import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OAuthService, OAuthModule } from 'angular-oauth2-oidc';
import { authConfig } from './auth.config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'OIDC Angular App';

  constructor(public oauthService: OAuthService) {
    this.configureOAuth();
  }

  public configureOAuth() {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (!this.oauthService.hasValidAccessToken()) {
        this.oauthService.initCodeFlow();
      }
    });
  }
}
