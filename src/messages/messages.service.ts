/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(public messageRepository: MessagesRepository) {}

  findOne(id: string) {
    return this.messageRepository.findOne(id);
  }

  findAll() {
    return this.messageRepository.findAll();
  }

  create(message: string) {
    return this.messageRepository.create(message);
  }
}
