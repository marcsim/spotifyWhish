import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AlbumService } from 'src/Album/album.service';
import { Album } from 'src/Album/models/album.entity';
import { Song } from 'src/Song/models/song.entity';
import { SongService } from 'src/Song/song.service';
import { AddArtistDTO } from './dto/add-artist.dto';
import { UpdateArtistDTO } from './dto/update-artist.dto';
import { Artist } from './models/artist.entity';
import { ArtistRepository } from './models/artist.repository';

@Injectable()
export class ArtistService {
  constructor(
    @InjectRepository(ArtistRepository)
    private artistRepository: ArtistRepository,
    @Inject(forwardRef(() => AlbumService))
    private albumService: AlbumService,
    @Inject(forwardRef(() => SongService))
    private songService: SongService,
  ) {}

  async createArtist(addArtistDTO: AddArtistDTO) {
    // eslint-disable-next-line prefer-const
    let albumListTmp: Album[] = [];
    // eslint-disable-next-line prefer-const
    let songListTmp: Song[] = [];
    if (addArtistDTO.albumList) {
      for (const s of addArtistDTO.albumList) {
        const found = await this.albumService.getAlbumByName(s.title);
        if (await found) {
          albumListTmp.push(await found);
        }
      }
    }
    if (addArtistDTO.songList) {
      for (const s of addArtistDTO.songList) {
        const found = await this.songService.getSongByName(s.title);
        if (await found) {
          songListTmp.push(await found);
        }
      }
    }
    return await this.artistRepository.createArtist(
      addArtistDTO,
      albumListTmp,
      songListTmp,
    );
  }

  async getArtistById(id: number): Promise<Artist> {
    const found = await this.artistRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Artist with ID "${id}" not found`);
    }
    return found;
  }

  async getArtistByName(name: string): Promise<Artist> {
    const found = await this.artistRepository.findOne({ name: name });
    if (!found) {
      throw new NotFoundException(`Artist with name "${name}" not found`);
    }
    return found;
  }

  async getAllArtists(): Promise<Artist[]> {
    const found = await this.artistRepository.find();
    if (!found) {
      throw new NotFoundException(`Artist not found`);
    }
    return found;
  }

  async updateArtist(UpdateArtistDTO: UpdateArtistDTO) {
    const found = this.getArtistById(UpdateArtistDTO.id);
    return await this.artistRepository.updateArtist(
      await found,
      UpdateArtistDTO,
    );
  }

  async deleteArtistById(id: number): Promise<Artist> {
    const found = await this.artistRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Artist with ID "${id}" not found`);
    } else {
      await this.artistRepository.deleteArtist(found);
      return found;
    }
    //await this.artistRepository.deleteArtist(await this.getArtistById(id));
  }
}
