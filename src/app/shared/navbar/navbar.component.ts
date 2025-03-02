import { Component } from '@angular/core';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { MachineComponent } from '../machine/machine.component';
import { MachineService } from '../../core/services/machine.service';
import { ClockComponent } from '../clock/clock.component';

@Component({
  selector: 'app-navbar',
  imports: [
    AsyncPipe,
    MachineComponent,
    NgForOf,
    NgIf,
    ClockComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  get machines$() {
    return this.machineService.machines$;
  }

  constructor(private machineService: MachineService) {}

}
