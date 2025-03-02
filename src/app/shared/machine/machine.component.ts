import { Component, HostBinding, Input } from '@angular/core';
import { MachineModel } from '../../core/models/machine.model';

@Component({
  selector: 'app-machine',
  imports: [],
  templateUrl: './machine.component.html',
  styleUrl: './machine.component.scss'
})
export class MachineComponent {

  @Input()
  type!: MachineModel['type'];

  @Input()
  state!: MachineModel['state'];

  @HostBinding('class')
  get activeClass() {
    return [this.state];
  }


  get typeIcon() {
    const typeIconMap: Record<MachineModel['type'], string> = {
      scale: 'scale',
      attacher: 'view_sidebar',
      packer: 'inventory',
      closer: 'apps',
    };

    return typeIconMap[this.type] ?? 'question_mark';
  }

  get stateIcon() {
    const typeIconMap: Record<MachineModel['state'], string> = {
      running: 'settings_backup_restore',
      warning: 'warning',
      alarm: 'error',
    };

    return typeIconMap[this.state] ?? 'question_mark';
  }
}
