import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddAlbumDTO } from './dto/add-album.dto';
import { UpdateAlbumDTO } from './dto/update-album.dto';
import { Album } from './models/album.entity';
import { AlbumRepository } from './models/album.repository';

@Injectable()
export class AlbumService {
  constructor(
    @InjectRepository(AlbumRepository)
    private albumRepository: AlbumRepository,
  ) {}

  async createAlbum(addAlbumDTO: AddAlbumDTO) {
    return await this.albumRepository.createAlbum(addAlbumDTO);
  }

  async getAlbumById(id: number): Promise<Album> {
    const found = await this.albumRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Album with ID "${id}" not found`);
    }
    return found;
  }

  async getAllAlbums(): Promise<Album[]> {
    const found = await this.albumRepository.find();
    if (!found) {
      throw new NotFoundException(`Album not found`);
    }
    return found;
  }

  async updateAlbum(UpdateAlbumDTO: UpdateAlbumDTO) {
    const found = this.getAlbumById(UpdateAlbumDTO.id);
    return await this.albumRepository.updateAlbum(await found, UpdateAlbumDTO);
  }

  async deleteAlbumById(id: number): Promise<Album> {
    const found = await this.albumRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Album with ID "${id}" not found`);
    } else {
      await this.albumRepository.deleteAlbum(found);
      return found;
    }
    //await this.albumRepository.deleteAlbum(await this.getAlbumById(id));
  }
}
