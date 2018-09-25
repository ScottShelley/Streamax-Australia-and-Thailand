import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {
  @Input('products') products: IProduct;
  isSelected: boolean[] = [true, false, false];
  p: number = 1;

  constructor() { }

  ngOnInit() {
    console.log('Test...', this.products);
    
  }

  toggle(index: number) {
    this.isSelected = [false, false, false];
    this.isSelected[index] = true;
  }

}
