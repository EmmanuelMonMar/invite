import { Component } from '@angular/core';
import { RouterOutlet,RouterLink, RouterLinkActive} from '@angular/router';
import { provideRouter } from '@angular/router';


@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet,RouterLink, RouterLinkActive],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css'
})
export class AppComponent {
	title = 'Our wedding';

/*	start(){
		console.log("click en start");
	}
	church(){
		console.log("click en church");
		this.router.navigate("/iglesia");
	}
	party(){
		console.log("click en party");
	}
	details(){
		console.log("click en details");
	}*/
}
