import {Component, OnInit} from '@angular/core';

import {ItemService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './details.component.html',
  providers: [ItemService]
})
export class ProductDetailsComponent implements OnInit {
  title = 'Product Details';

  constructor() {
  }

  ngOnInit() {
  }

}

