import { Component } from '@angular/core';

@Component({
  selector: 'app-church',
  standalone: true,
  imports: [],
  templateUrl: './church.component.html',
  styleUrl: './church.component.css'
})
export class ChurchComponent {
	churchInfo = "Boda";
	churchInfo2 = "Religiosa";
	title = "La boda Religiosa se celebrará en:";
	churchName = "Parroquia Santa Cruz y la Virgen del Rosario";
	address = "P. de los Pelicanos y C. La Salitrera";
	address2 = " CP. 40884 Ixtapa Zihuatanejo, Gro.";
}
