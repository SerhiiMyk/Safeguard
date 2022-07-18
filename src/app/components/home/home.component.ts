import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  showMobileMenu: boolean = false;

  ngAfterViewInit() {
    window.addEventListener('scroll', () => {
      let header = document.querySelector('.header')
      header?.classList.toggle('scrolling-active', window.scrollY > 0)
    })
  }

  scroll(direction: string) {
    if (this.showMobileMenu) {
      this.onBurgerMenuClick()
    }
    if (direction === 'up') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 860, behavior: 'smooth' })
    }
  }

  onBurgerMenuClick() {
    this.showMobileMenu = !this.showMobileMenu
    document.querySelector('body')?.classList.toggle('lock')
  }
}
