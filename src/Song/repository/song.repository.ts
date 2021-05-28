import { Album } from 'src/album/models/album.entity';
import { Artist } from 'src/artist/models/artist.entity';
import { EntityRepository, Repository } from 'typeorm';
import { AddSongDTO } from '../dto/add-song.dto';
import { UpdateSongDTO } from '../dto/update-song.dto';
import { Song } from '../models/song.entity';

@EntityRepository(Song)
export class SongRepository extends Repository<Song> {
  async createSong(
    addSongDTO: AddSongDTO,
    albumListTmp?: Album[],
    artistListTmp?: Artist[],
  ): Promise<Song> {
    const { title, duration } = addSongDTO;
    const song = new Song();
    song.title = title;
    song.duration = duration;
    // if (albumListTmp) {
    //   song.albumList = albumListTmp;
    // }
    // if (artistListTmp) {
    //   song.artistList = artistListTmp;
    // }
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
