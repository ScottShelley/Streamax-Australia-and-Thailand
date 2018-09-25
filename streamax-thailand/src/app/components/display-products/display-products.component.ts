import { Component, OnInit, Input } from '@angular/core';
import { IProducts } from '../../models/product';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {
  @Input('products') products: IProducts;
  isSelected: boolean[] = [true, false, false];
  p: number = 1;

  constructor(public lang: LangService) { }

  ngOnInit() {
  }

  toggle(index: number) {
    this.isSelected = [false, false, false];
    this.isSelected[index] = true;
  }

}
