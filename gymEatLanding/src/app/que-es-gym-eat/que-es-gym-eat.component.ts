
import { Component, OnInit } from '@angular/core';
import { JsProvidersService } from '../services/js-providers.service';

@Component({
  selector: 'app-que-es-gym-eat',
  templateUrl: './que-es-gym-eat.component.html',
  styleUrls: ['./que-es-gym-eat.component.scss']
})
export class QueEsGymEatComponent implements OnInit {

  constructor(private jsProvider: JsProvidersService) {
    jsProvider.carga(["script"]);
  }

  ngOnInit(): void {

  }



}
