import { Component, HostBinding, OnInit } from '@angular/core';

import { fade } from '../../animations/fade/fade';
import { ModalConfig } from './model/modal-config';
import { ModalRef } from '../../models/modal-ref';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [fade],
})
export class ModalComponent implements OnInit {
  public config!: ModalConfig;
  public modalRef!: ModalRef;
  @HostBinding('@fade') fade = true;

  constructor() {}

  ngOnInit(): void {}
}
