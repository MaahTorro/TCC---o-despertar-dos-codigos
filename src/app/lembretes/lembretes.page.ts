import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lembretes',
  templateUrl: './lembretes.page.html',
  styleUrls: ['./lembretes.page.scss'],
})
export class LembretesPage implements OnInit {

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
