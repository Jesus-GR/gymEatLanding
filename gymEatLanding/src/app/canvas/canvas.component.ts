import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit, AfterViewInit {
  @ViewChild('canvasRef',{static:false}) canvasRef: any;
  @ViewChild('video',{static:false}) video!: ElementRef;
  public width = 300;
  public height = 450;
  haComenzadoDibujo = false;
  contexto!: CanvasRenderingContext2D;
  points: Array<any[]> = [];

  @HostListener('document:mousemove', ['$event'])
  onMouseMove = (e:any) =>{

    if(e.target.id === 'canvasId' && this.haComenzadoDibujo == true){
      this.write(e)
    }
  }

  @HostListener('click',['$event'])
  onClick = (e:any) =>{
    if(e.target.id === 'canvasId'){
      this.haComenzadoDibujo = !this.haComenzadoDibujo;
    }
  }
  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {

    this.render();
  }

  render(): any{
    const canvasEl = this.canvasRef.nativeElement;
    this.contexto = canvasEl.getContext('2d');
    canvasEl.width = this.width;
    canvasEl.height = this.height;

    this.contexto.lineWidth = 3;
    this.contexto.lineCap = 'round';
    this.contexto.strokeStyle = '	#0000FF'
  }

  write(res:any): any{
    const canvasEl: any = this.canvasRef.nativeElement;
    const rect = canvasEl.getBoundingClientRect();
    const prevPos ={
      x: res.clientX - rect.left,
      y: res.clientY - rect.top,

    };
    this.writeSingle(prevPos)
  }

  writeSingle(prevPos:any){
    this.points.push(prevPos);
    if(this.points.length > 3){
      const prevPost = this.points[this.points.length - 1];
      const currentPos = this.points[this.points.length -2];
      this.drawOnCanvas(prevPost, currentPos);
    }
  }

  drawOnCanvas(prevPos: any, currentPos:any){
    if(!this.contexto){
      return;
    }

    this.contexto.beginPath();
    if(prevPos){
      this.contexto.moveTo(prevPos.x, prevPos.y);
      this.contexto.lineTo(currentPos.x, currentPos.y);
      this.contexto.stroke();
    }

  }

  clearZone(){
    this.points = [];
    this.contexto.clearRect(0,0,this.width, this.height)
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
