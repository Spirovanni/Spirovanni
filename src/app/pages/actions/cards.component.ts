import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../@core/services/api.service';

@Component({
  selector: 'app-actions',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cards: any = [];
  constructor(
    private apiService: ApiService
  ) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.apiService.getCards().subscribe(
      data => {
        // @ts-ignore
        this.cards = data;
      },
      error => console.log(error)
    );
  }

}
