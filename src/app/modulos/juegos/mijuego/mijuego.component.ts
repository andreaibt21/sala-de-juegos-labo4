import {
  Component,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mijuego',
  templateUrl: './mijuego.component.html',
  styleUrls: ['./mijuego.component.scss'],
})
export class MijuegoComponent implements OnInit, OnDestroy {

  constructor( private router: Router) {}
  dots = Array.from(Array(160).keys());
  colors = [
    'red',
    'green',
    'blue',
    'pink',
    'purple',
    'orange',
    'yellow',
    'cyan',
    'grey',
    'magenta',
  ];
  randomColorIndex = 0;
  contador = 25;
  isGameStarted = false;
  isGameEnded = false;
  isWon = false;
  cleanCount = 0;
  dirtyCount = 0;
  myInterval: any;

  @ViewChildren('dotRefs') dotRefs: QueryList<any> | undefined;

  changeStyle(dot: any) {
    this.randomColorIndex = Math.floor(Math.random() * 10);
    if (!this.isGameEnded) {
      dot.classList.add(this.colors[this.randomColorIndex]);
      this.checkGameStatus();
    }
  }

  startTimer() {
    this.isGameStarted = true;
    setInterval(() => {
      if (this.contador > 0) {
        this.contador--;
      } else {
        this.isGameEnded = true;
      }
    }, 1000);
  }

  checkGameStatus() {
    this.cleanCount = 0;
    this.dirtyCount = 0;
    this.dotRefs?.forEach((dot) => {
      if (dot.nativeElement.classList.length > 1) {
        this.dirtyCount++;
      } else {
        this.cleanCount++;
      }
    });
    if (!this.isGameStarted) {
      this.startTimer();
    }
    if (this.dirtyCount == 160) {
      this.isWon = true;
      this.isGameEnded = true;
    }
  }
  startAgain(dot: any) {
    this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/juegos/mijuego']);
  });

   
  }
  ngOnInit(): void {}

  ngOnDestroy(): void {
    clearInterval(this.myInterval);
  }
}
