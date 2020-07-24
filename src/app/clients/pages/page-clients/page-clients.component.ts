import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-clients',
  templateUrl: './page-clients.component.html',
  styleUrls: ['./page-clients.component.scss']
})
export class PageClientsComponent implements OnInit {
  public collection: Client[];
  public headers: string[];
  public states = Object.values(StateClient);
  constructor(private cs: ClientsService) { }

  ngOnInit(): void {
    this.cs.collection.subscribe(
      (datas) => {
        this.collection = datas;
        // console.log(this.collection);
      }
    );
    // console.log(this.collection);
    this.headers = [
      'Name',
      'Total HT',
      'Tva',
      'Total TTC',
      'State'
    ];
  }

  public changeState(item: Client, event) {
    this.cs.changeState(item, event.target.value).subscribe((res) => {
      item.state = res.state;
    });
  }

  public popup() {
    console.log('open popup');
  }

}
