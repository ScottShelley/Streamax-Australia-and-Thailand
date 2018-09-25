import { Injectable } from '@angular/core';
import { CookieService } from '../../../node_modules/ngx-cookie-service';

@Injectable()
export class LangService {
  private lang: string = "english";

  constructor(private cookieService: CookieService) {
    if (cookieService.check("lang")) {
      switch (cookieService.get("lang")) {
        case "english":
          this.lang = cookieService.get("lang");
          break;
  
        case "thai":
            this.lang = cookieService.get("lang");
          break;
      
        default:
          break;
      }
    }
  }

  getLang() {
    return this.lang;
  }

  setLang(value: string) {
    switch (value) {
      case "english":
        this.lang = "english";
        this.cookieService.set("lang", "english");
        break;

      case "thai":
        this.lang = "thai";
        this.cookieService.set("lang", "thai");
        break;
    
      default:
        this.lang = "english";
        this.cookieService.set("lang", "english");
        break;
    }
  }

}
