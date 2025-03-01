import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MachineModel } from '../models/machine.model';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  machines$: Observable<MachineModel[]>;

  constructor(private httpClient: HttpClient) {
    this.machines$ = this.httpClient.get<MachineModel[]>('/data.json');
  }
}
