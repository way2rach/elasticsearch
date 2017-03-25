import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {ItemService} from './app.service';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-root',
  templateUrl: './details.component.html',
  providers: [ItemService]
})
export class ProductDetailsComponent implements OnInit {

  constructor(private itemService: ItemService, private route: ActivatedRoute, private router: Router) {
  }

  selectedItem = {};

  ngOnInit() {

    let productId = this.route.snapshot.params['id'];
    this.route.params
      .switchMap((params: Params) => this.itemService.getItems(params['id']))
      .subscribe((data) => this.selectedItem = data.hits.hits.find(item => item._id === productId));

  }

  gotoItems() {
    this.router.navigate(['']);
  }
}


