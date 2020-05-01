import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderListService } from '../Service/order-list.service';
import { Orderlist } from '../Model/orderlist.model';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.scss']
})
export class OrderlistComponent implements OnInit {

  public ordData: Orderlist[];
  constructor(
    private orderlistService: OrderListService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.orderlistService.getAllorder().subscribe((data: Orderlist[]) => {
        if (data){
          this.ordData = data;
          console.log(data);
        }
    });
  }

}
