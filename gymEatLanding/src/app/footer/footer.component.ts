import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { JsProvidersService } from '../services/js-providers.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit {


  constructor(private jsProvider: JsProvidersService) { }
  ngAfterViewInit(): void {
    this.jsProvider.carga(['menu']);
  }

  ngOnInit(): void {
    this.jsProvider.carga(['menu']);
  }

}
