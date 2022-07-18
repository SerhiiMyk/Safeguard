import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showMobileMenu: boolean = false;

  scroll(direction: string) {
    if (this.showMobileMenu) {
      this.showMobileMenu = !this.showMobileMenu
    }
    if (direction === 'up') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 850, behavior: 'smooth' })
    }
  }

  onBurgerMenuClick() {
    this.showMobileMenu = !this.showMobileMenu
    document.querySelector('body')?.classList.toggle('lock')
  }
}
