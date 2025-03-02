import { Component } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { map, timer } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-clock',
  imports: [
    AsyncPipe,
    DatePipe
  ],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss'
})
export class ClockComponent {

  // no need for ngOnInit in this use case
  $dateNow = timer(0, 1000)
    .pipe(
      takeUntilDestroyed(),
      map(() => Date.now()),
    );

}
