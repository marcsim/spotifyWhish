import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddSongDTO } from './dto/add-song.dto';
import { UpdateSongDTO } from './dto/update-song.dto';
import { Song } from './models/song.entity';
import { SongRepository } from './models/song.repository';

@Injectable()
export class SongService {
  constructor(
    @InjectRepository(SongRepository)
    private songRepository: SongRepository,
  ) {}

  async createSong(addSongDTO: AddSongDTO) {
    return await this.songRepository.createSong(addSongDTO);
  }

  async getSongById(id: number): Promise<Song> {
    const found = await this.songRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Song with ID "${id}" not found`);
    }
    return found;
  }

  async getAllSongs(): Promise<Song[]> {
    const found = await this.songRepository.find();
    if (!found) {
      throw new NotFoundException(`Song not found`);
    }
    return found;
  }

  async updateSong(UpdateSongDTO: UpdateSongDTO) {
    const found = this.getSongById(UpdateSongDTO.id);
    return await this.songRepository.updateSong(await found, UpdateSongDTO);
  }

  async deleteSongById(id: number): Promise<Song> {
    const found = await this.songRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Song with ID "${id}" not found`);
    } else {
      await this.songRepository.deleteSong(found);
      return found;
    }
    //await this.songRepository.deleteSong(await this.getSongById(id));
  }
}
