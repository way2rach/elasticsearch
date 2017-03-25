import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ItemService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './product.component.html',
  providers: [ItemService]
})
export class ProductComponent implements OnInit {
  title = 'World of Clothes';

  constructor ( private router: Router, private itemService: ItemService ) {}
  sliderValue:number = 300;

   item = {};
   startPage: number= 0;
   endPage: number = 5;

  ngOnInit() {
   this.itemService.getItems()
      .subscribe(data => this.item = data.hits);

  }

  onSelect(id) {
    this.router.navigate(['/detail', id]);

  }

  pageHasChanged($event) {
    console.log($event);
    if($event) {
      this.startPage = 0;
      this.endPage = 5;
      console.log(this.startPage);
    this.startPage = this.startPage + (5*($event -1));
    this.endPage = $event * 5;
    }
  }



}


