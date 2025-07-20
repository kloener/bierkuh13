import { Injectable, inject } from '@angular/core';

export interface IEncoder {
  encode(input: string): string;
  decode(input: string): string;
}

@Injectable({
  providedIn: 'root'
})
export class Base64Encoder implements IEncoder {
  encode(str: string): string {
    return btoa(encodeURIComponent(str));
  }

  decode(str: string): string {
    return decodeURIComponent(atob(str));
  }
}

@Injectable({
  providedIn: 'root'
})
export class EncodingService {
  private readonly base64Encoder = inject(Base64Encoder);


  encodeBase64(str: string): string {
    return this.base64Encoder.encode(str);
  }

  decodeBase64(str: string): string {
    return this.base64Encoder.decode(str);
  }
}