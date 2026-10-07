import { Component, inject } from '@angular/core';
import { LanguageService } from './core/services/language.service';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly language = inject(LanguageService);

  constructor() {
    this.language.init();
  }
}
