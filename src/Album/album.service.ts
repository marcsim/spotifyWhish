import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArtistService } from 'src/artist/artist.service';
import { Artist } from 'src/artist/models/artist.entity';
import { Song } from 'src/song/models/song.entity';
import { SongService } from 'src/song/song.service';
import { AddAlbumDTO } from './dto/add-album.dto';
import { UpdateAlbumDTO } from './dto/update-album.dto';
import { Album } from './models/album.entity';
import { AlbumRepository } from './repository/album.repository';

@Injectable()
export class AlbumService {
  constructor(
    @InjectRepository(AlbumRepository)
    private albumRepository: AlbumRepository,
    @Inject(forwardRef(() => SongService))
    private songService: SongService,
    @Inject(forwardRef(() => ArtistService))
    private artistService: ArtistService,
  ) {}

  async createAlbum(addAlbumDTO: AddAlbumDTO) {
    return await this.albumRepository.createAlbum(addAlbumDTO);
  }

  async getAlbumByName(title: string): Promise<Album> {
    const found = await this.albumRepository.findOne({ title: title });
    if (!found) {
      throw new NotFoundException(`Album with name "${title}" not found`);
    }
    return found;
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
