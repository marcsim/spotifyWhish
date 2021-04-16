import { Artist } from 'src/Artist/models/artist.entity';
import { Song } from 'src/Song/models/song.entity';
import { EntityRepository, Repository } from 'typeorm';
import { AddAlbumDTO } from '../dto/add-album.dto';
import { UpdateAlbumDTO } from '../dto/update-album.dto';
import { Album } from './album.entity';

@EntityRepository(Album)
export class AlbumRepository extends Repository<Album> {
  async createAlbum(
    addAlbumDTO: AddAlbumDTO,
    songListTmp?: Song[],
    artistListTmp?: Artist[],
  ): Promise<Album> {
    const { title, year, cover } = addAlbumDTO;
    const album = new Album();
    album.title = title;
    album.year = year;
    album.cover = cover;
    if (songListTmp) {
      album.songList = songListTmp;
    }
    if (artistListTmp) {
      album.artistList = artistListTmp;
    }
    return await album.save();
  }

  async updateAlbum(
    album: Album,
    UpdateAlbumDTO: UpdateAlbumDTO,
  ): Promise<Album> {
    album.title = UpdateAlbumDTO.title;
    album.year = UpdateAlbumDTO.year;
    album.cover = UpdateAlbumDTO.cover;

    return await album.save();
  }

  async deleteAlbum(album: Album): Promise<Album> {
    return await album.remove();
  }
}
