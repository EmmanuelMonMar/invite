import { Component } from '@angular/core';
import { RouterOutlet,RouterLink, RouterLinkActive} from '@angular/router';
import { provideRouter } from '@angular/router';
import { Countdown } from './countdown/countdown.component'


@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet,RouterLink, RouterLinkActive,Countdown],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {
	title = 'Our wedding';

/*	reproducir() {
		const audio = new Audio('../../assets/music/bruno.mp3');
		audio.play();
	}*/

}
