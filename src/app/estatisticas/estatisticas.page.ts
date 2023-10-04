import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.page.html',
  styleUrls: ['./estatisticas.page.scss'],
})
export class EstatisticasPage implements OnInit {

  public alertButtons = [
    {
      text: 'Cancelar',
      handler: () => {
        console.log('usuário cancelou')
      }
    },
    {
      text: 'Sair',
      handler: () => {
        window.location.href = "../home"
      }

    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
