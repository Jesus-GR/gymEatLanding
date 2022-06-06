import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { JsProvidersService } from '../services/js-providers.service';

@Component({
  selector: 'app-motivacion',
  templateUrl: './motivacion.component.html',
  styleUrls: ['./motivacion.component.scss']
})
export class MotivacionComponent implements OnInit {

  @ViewChild('audio') audio!: ElementRef;
  buttonAudioState!: boolean;
  constructor(private jsProvider: JsProvidersService) {

   }

  ngOnInit(): void {

  }

  playPause(){
    const asAudio = this.audio.nativeElement;
    if(asAudio.paused || asAudio.ended){
      this.buttonAudioState = true
      asAudio.play();
    }else{
      this.buttonAudioState = false
      asAudio.pause();

    }
  }

}
