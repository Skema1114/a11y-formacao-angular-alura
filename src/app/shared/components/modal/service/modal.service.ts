import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  Injector,
} from '@angular/core';

import { BodyInjectorService } from 'src/app/shared/services/body-injector/body-injector.service';
import { ModalComponent } from '../modal.component';
import { ModalConfig } from '../model/modal-config';
import { ModalRef } from '../model/modal-ref';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private componentFactory!: ComponentFactory<ModalComponent>;

  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private bodyInjectorService: BodyInjectorService
  ) {
    this.componentFactory =
      componentFactoryResolver.resolveComponentFactory(ModalComponent);
  }

  public open(config: ModalConfig): ModalRef {
    const componentRef = this.createComponentRef();
    componentRef.instance.config = config;
    console.log(componentRef.instance);
    console.log('Open called');
    this.bodyInjectorService.stackBeforeAppRoot(componentRef);
    return new ModalRef(componentRef);
  }

  private createComponentRef(): ComponentRef<ModalComponent> {
    return this.componentFactory.create(this.injector);
  }
}
