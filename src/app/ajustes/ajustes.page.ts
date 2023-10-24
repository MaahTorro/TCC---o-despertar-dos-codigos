import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
})
export class AjustesPage implements OnInit {

  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }

  
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
        window.location.href = '../home'
      }
    },
  ];


  ngOnInit() {
  }

}
