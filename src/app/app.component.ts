import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GithubService } from './core/services/github.service';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { IconsComponent } from './shared/components/icons/icons.component';

@Component({
  selector: 'app-root',
  imports: [
    AsyncPipe,
    CommonModule,
    IconsComponent,
    JsonPipe,
    RouterModule
  ],
  providers: [
    GithubService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {

  repos$: Observable<any>
  user$: Observable<any>
  
  constructor(private githubService: GithubService) {
    this.repos$ = this.githubService.repos$
    this.user$ = this.githubService.user$
  }
}
