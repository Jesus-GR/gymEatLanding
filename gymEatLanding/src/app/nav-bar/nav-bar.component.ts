import { ThisReceiver } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { JsProvidersService } from '../services/js-providers.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @ViewChild('myTopnav') topNav!: ElementRef;
  constructor(private jsProvider: JsProvidersService) { }

  ngOnInit(): void {

  }

  changeNavBar(){
    var x = this.topNav.nativeElement;
    if(x !== null){
      if (x.className === "navBar") {
      x.className += " responsive";
    } else {
      x.className = "navBar";
    }
    }
  }

}
