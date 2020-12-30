import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  @Input() card;
  constructor() { }

  ngOnInit(): void {
  }

}
