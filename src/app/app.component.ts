import { Component, OnInit } from '@angular/core';

import { ItemService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ItemService]
})
export class AppComponent implements OnInit {
  title = 'World of Clothes';

  constructor (private itemService: ItemService) {}

   item = {};

  ngOnInit() {
   this.itemService.getItems()
      .subscribe(data => this.item = data.hits);
  }

}

