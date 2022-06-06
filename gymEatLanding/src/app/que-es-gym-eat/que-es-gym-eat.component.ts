
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConnectableObservable } from 'rxjs';
import { JsProvidersService } from '../services/js-providers.service';

@Component({
  selector: 'app-que-es-gym-eat',
  templateUrl: './que-es-gym-eat.component.html',
  styleUrls: ['./que-es-gym-eat.component.scss']
})
export class QueEsGymEatComponent implements OnInit {

@ViewChild('video') video!: ElementRef;
  constructor(private jsProvider: JsProvidersService) {

  }

  ngOnInit(): void {

  }

  playPauseVideo(){
    const video = this.video.nativeElement;

    if(!video.paused && !video.ended){
      video.pause();

     }
     else{
      video.play();
    }
  }


}

