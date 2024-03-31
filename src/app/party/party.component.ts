import { Component } from '@angular/core';

@Component({
  selector: 'app-party',
  standalone: true,
  imports: [],
  templateUrl: './party.component.html',
  styleUrl: './party.component.css'
})

export class PartyComponent {
	detailsInfo = "Recepción";
	detailsInfo2 = "y Boda Civil";

	title = "Boda Civil";
	text = "Para continuar con este evento tan especial";
	text2 = "Los esperamos en:";
	partyName = "Jardin Mar y Arena";
	time = "A las 17:30 hrs.";
	address = "Ubicado en Playa Larga";
	address2 = " CP. 40882 Ixtapa Zihuatanejo, Gro.";


}
