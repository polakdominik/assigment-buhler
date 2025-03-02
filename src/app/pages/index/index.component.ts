import { Component } from '@angular/core';
import { MachineService } from '../../core/services/machine.service';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { MachineComponent } from '../../shared/machine/machine.component';

@Component({
  selector: 'app-index',
  imports: [
    AsyncPipe,
    MachineComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

  get machines$() {
    return this.machineService.machines$;
  }

  constructor(private machineService: MachineService) {}

}
