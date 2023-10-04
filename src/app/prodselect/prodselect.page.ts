import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prodselect',
  templateUrl: './prodselect.page.html',
  styleUrls: ['./prodselect.page.scss'],
})
export class ProdselectPage implements OnInit {

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
