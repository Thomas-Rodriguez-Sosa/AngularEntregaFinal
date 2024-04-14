import { Component } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.scss'
})
export class BarComponent {
  showFiller = false;

  isMobile (): boolean {
    return window.innerWidth <= 280;
  }
}
