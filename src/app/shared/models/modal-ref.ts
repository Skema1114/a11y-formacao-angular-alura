import { ComponentRef } from '@angular/core';

import { ModalComponent } from '../components/modal/modal.component';

export class ModalRef {
  constructor(private componentRef: ComponentRef<ModalComponent>) {}

  public close(): void {
    console.log('Close called');
    this.componentRef.destroy();
  }
}
