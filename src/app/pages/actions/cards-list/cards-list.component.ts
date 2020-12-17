import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { TablesService, Element } from '../../tables/tables.service';

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.scss']
})
export class CardsListComponent {
  public displayedColumns = ['position', 'name', 'weight', 'symbol'];
  public dataSource: any;
  public settings: Settings;
  constructor(public appSettings: AppSettings, private tablesService: TablesService) {
    this.settings = this.appSettings.settings;
    this.dataSource = new MatTableDataSource<Element>(this.tablesService.getData());
  }
}