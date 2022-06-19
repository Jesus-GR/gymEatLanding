import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { JsProvidersService } from '../services/js-providers.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit {

  fillColor = 'rgb(255, 0, 0)';
  constructor(private jsProvider: JsProvidersService) { }
  ngAfterViewInit(): void {
    this.jsProvider.carga(['menu']);
  }

  ngOnInit(): void {
    this.jsProvider.carga(['menu']);
  }

  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }

}
