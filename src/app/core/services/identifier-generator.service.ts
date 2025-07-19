import { Injectable } from '@angular/core';
import { IIdentifierGenerator } from '../interfaces/repository.interfaces';
import { generateId } from '../id-gen.service';

@Injectable({
  providedIn: 'root'
})
export class NanoIdGenerator implements IIdentifierGenerator {
  async generate(): Promise<string> {
    return await generateId();
  }
}