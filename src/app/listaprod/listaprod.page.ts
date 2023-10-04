import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listaprod',
  templateUrl: './listaprod.page.html',
  styleUrls: ['./listaprod.page.scss'],
})
export class ListaprodPage implements OnInit {

  public alertButtons = [
    {
      text: 'Cancelar',
      handler: () => {
        console.log('usuário cancelou')
      }

    },
    {
      text: 'Sim',
      handler: () => {
        window.location.href = '../cadastroprod'
      }
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
