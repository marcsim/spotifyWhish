import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SongRepository } from './models/song.repository';

@Injectable()
export class SongService {
  constructor(
    @InjectRepository(SongRepository)
    private songRepository: SongRepository,
  ) {}
}
