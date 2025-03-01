export interface MachineModel {
  type: 'scale' | 'attacher' | 'packer' | 'closer';
  state: 'running' | 'alarm' | 'warning';
}
