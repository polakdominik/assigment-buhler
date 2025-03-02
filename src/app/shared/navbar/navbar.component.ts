import { Component } from '@angular/core';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { MachineComponent } from '../machine/machine.component';
import { MachineService } from '../../core/services/machine.service';

@Component({
  selector: 'app-navbar',
  imports: [
    AsyncPipe,
    MachineComponent,
    NgForOf,
    NgIf
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
