import { Injectable } from '@angular/core';

import { ModalConfig } from './modal-config';
import { ModalRef } from './modal-ref';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor() {}

  public open(config: ModalConfig): ModalRef {
    console.log('Open called');
    return new ModalRef();
  }
}
