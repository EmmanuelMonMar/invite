import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-invite',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './invite.component.html',
  styleUrl: './invite.component.css'
})
export class InviteComponent {

groomName = 'Elizabeth';
	brideName = 'Emmanuel';
	title = "Nuestra Boda";
	coverInvitation: string = '../../assets/pics/coverInvitation.png';
}
