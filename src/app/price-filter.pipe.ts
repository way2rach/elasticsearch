import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'priceFilter' })

export class PriceFilterPipe implements PipeTransform {

  transform(allItems, value) {
    return allItems.filter(item => item._source.item_price <= value)
      .sort((a,b) => (a._source.item_price) - (b._source.item_price));
  }
}

