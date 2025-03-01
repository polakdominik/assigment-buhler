import { Component } from '@angular/core';
import { MachineService } from '../../core/services/machine.service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-index',
  imports: [
    AsyncPipe,
    JsonPipe
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
