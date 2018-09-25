import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private d = new Date();
  year = this.d.getFullYear();;

  constructor() { }

  ngOnInit() {
  }

}
