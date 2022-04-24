/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

Injectable();
export class MessagesRepository {
  async findOne(id: string) {
    const content = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(content.toString());
    return messages?.[id] || null;
  }

  async findAll() {
    const content = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(content.toString());
    return messages;
  }

  async create(message: string) {
    const content = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(content.toString());
    const id = Math.floor(Math.random() * 999);
    const newMessage = {
      id: id,
      content: message,
    };
    messages[id] = newMessage;
    console.log(newMessage);
    await writeFile('messages.json', JSON.stringify(messages), {
      encoding: 'utf-8',
    });
    return newMessage;
  }
}
