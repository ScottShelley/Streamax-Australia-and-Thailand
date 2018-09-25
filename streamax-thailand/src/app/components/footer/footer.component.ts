import { Component, OnInit } from '@angular/core';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private d = new Date();
  year = this.d.getFullYear();;

  constructor(public lang: LangService) { }

  ngOnInit() {
  }

}
