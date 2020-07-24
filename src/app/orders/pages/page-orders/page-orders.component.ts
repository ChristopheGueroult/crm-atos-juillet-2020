import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from 'src/app/shared/models/order';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-page-orders',
  templateUrl: './page-orders.component.html',
  styleUrls: ['./page-orders.component.scss']
})
export class PageOrdersComponent implements OnInit {
  public collection$: BehaviorSubject<Order[]> = new BehaviorSubject(null);
  public headers: string[];
  public states = Object.values(StateOrder);
  constructor(
    private os: OrdersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.os.collection.subscribe(
      (datas) => {
        this.collection$.next(datas);
      }
    );
    // console.log(this.collection);
    this.headers = [
      'Action',
      'Type',
      'Client',
      'NbJours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State'
    ];
  }

  public changeState(item: Order, event) {
    // console.log(item, event.target.value);
    this.os.changeState(item, event.target.value).subscribe((res) => {
      item.state = res.state;
    });
  }

  public popup() {
    console.log('open popup');
  }

  public goToEdit(item: Order) {
    this.router.navigate(['orders', 'edit', item.id]);
  }

  public delete(item: Order) {
    this.os.delete(item).subscribe((res) => {
      this.os.collection.subscribe(
        (datas) => {
          this.collection$.next(datas);
        }
      );
    });
  }
}
