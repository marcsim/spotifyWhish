import { EntityRepository, Repository } from 'typeorm';
import { AddSongDTO } from '../dto/add-song.dto';
import { UpdateSongDTO } from '../dto/update-song.dto';
import { Song } from './song.entity';

@EntityRepository(Song)
export class SongRepository extends Repository<Song> {
  async createSong(addSongDTO: AddSongDTO): Promise<Song> {
    const { title, duration } = addSongDTO;
    const song = new Song();
    song.title = title;
    song.duration = duration;
    return await song.save();
  }

  async updateSong(song: Song, UpdateSongDTO: UpdateSongDTO): Promise<Song> {
    song.title = UpdateSongDTO.title;
    song.duration = UpdateSongDTO.duration;
    return await song.save();
  }

  async deleteSong(song: Song): Promise<Song> {
    return await song.remove();
  }
}
