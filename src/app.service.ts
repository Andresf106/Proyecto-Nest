import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    const date = new Date(); 
    return {
      message: "hola mundo hello world",
      date: date.toLocaleDateString(),

    }
  }
}
