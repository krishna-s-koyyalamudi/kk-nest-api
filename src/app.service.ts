import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAbout(): string {
    return 'Krishna Sumanth Koyyalamudi, an Electronics and Communication Engineer turned Software Developer';
  }
  getHello(): string {
    return 'Hello World from Krishna Sumanth Koyyalamudi!';
  }
}
