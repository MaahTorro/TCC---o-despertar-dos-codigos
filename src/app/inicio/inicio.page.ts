import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

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
