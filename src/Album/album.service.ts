import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArtistService } from 'src/Artist/artist.service';
import { Artist } from 'src/Artist/models/artist.entity';
import { Song } from 'src/Song/models/song.entity';
import { SongService } from 'src/Song/song.service';
import { AddAlbumDTO } from './dto/add-album.dto';
import { UpdateAlbumDTO } from './dto/update-album.dto';
import { Album } from './models/album.entity';
import { AlbumRepository } from './models/album.repository';

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
    // eslint-disable-next-line prefer-const
    let songListTmp: Song[] = [];
    // eslint-disable-next-line prefer-const
    let artistListTmp: Artist[] = [];
    if (addAlbumDTO.songList) {
      for (const s of addAlbumDTO.songList) {
        const found = await this.songService.getSongByName(s.title);
        if (await found) {
          songListTmp.push(await found);
        }
      }
    }
    if (addAlbumDTO.artistList) {
      for (const s of addAlbumDTO.artistList) {
        const found = await this.artistService.getArtistByName(s.name);
        if (await found) {
          artistListTmp.push(await found);
        }
      }
    }
    return await this.albumRepository.createAlbum(
      addAlbumDTO,
      songListTmp,
      artistListTmp,
    );
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
