import { Injectable } from '@angular/core';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class UniqueIdService {
  constructor() {}

  private generateUniqueId(): string {
    return uuid.v1();
  }

  public generateUniqueIdWithPrefix(prefix: string): string {
    const uniqueId = this.generateUniqueId();
    return `${prefix}-${uniqueId}`;
  }
}
