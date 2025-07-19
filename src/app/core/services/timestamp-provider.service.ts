import { Injectable } from '@angular/core';
import { ITimestampProvider } from '../interfaces/repository.interfaces';

@Injectable({
  providedIn: 'root'
})
export class IsoTimestampProvider implements ITimestampProvider {
  getCurrentTimestamp(): string {
    return new Date().toISOString();
  }
}