import { EntityRepository, Repository } from 'typeorm';
import { AddAlbumDTO } from '../dto/add-album.dto';
import { UpdateAlbumDTO } from '../dto/update-album.dto';
import { Album } from './album.entity';

@EntityRepository(Album)
export class AlbumRepository extends Repository<Album> {
  async createAlbum(addAlbumDTO: AddAlbumDTO): Promise<Album> {
    const { title, year, cover } = addAlbumDTO;
    const album = new Album();
    album.title = title;
    album.year = year;
    album.cover = cover;
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
