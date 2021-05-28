import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AlbumService } from 'src/album/album.service';
import { Album } from 'src/album/models/album.entity';
import { ArtistService } from 'src/artist/artist.service';
import { Artist } from 'src/artist/models/artist.entity';
import { AddSongDTO } from './dto/add-song.dto';
import { UpdateSongDTO } from './dto/update-song.dto';
import { Song } from './models/song.entity';
import { SongRepository } from './repository/song.repository';

@Injectable()
export class SongService {
  constructor(
    @InjectRepository(SongRepository)
    private songRepository: SongRepository,
    @Inject(forwardRef(() => ArtistService))
    private artistService: ArtistService,
    @Inject(forwardRef(() => AlbumService))
    private albumService: AlbumService,
  ) {}

  async createSong(addSongDTO: AddSongDTO) {
    // // eslint-disable-next-line prefer-const
    // let albumListTmp: Album[] = [];
    // // eslint-disable-next-line prefer-const
    // let artistListTmp: Artist[] = [];
    // if (addSongDTO.albumList) {
    //   for (const s of addSongDTO.albumList) {
    //     const found = await this.albumService.getAlbumByName(s.title);
    //     if (await found) {
    //       albumListTmp.push(await found);
    //     }
    //   }
    // }
    // if (addSongDTO.artistList) {
    //   for (const s of addSongDTO.artistList) {
    //     const found = await this.artistService.getArtistByName(s.name);
    //     if (await found) {
    //       artistListTmp.push(await found);
    //     }
    //   }
    // }
    return await this.songRepository.createSong(addSongDTO);
  }

  async getSongById(id: number): Promise<Song> {
    const found = await this.songRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Song with ID "${id}" not found`);
    }
    return found;
  }

  async getSongByName(title: string): Promise<Song> {
    const found = await this.songRepository.findOne({ title: title });
    if (!found) {
      throw new NotFoundException(`Song with name "${title}" not found`);
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
