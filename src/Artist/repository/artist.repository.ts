import { Album } from 'src/album/models/album.entity';
import { Song } from 'src/song/models/song.entity';
import { EntityRepository, Repository } from 'typeorm';
import { AddArtistDTO } from '../dto/add-artist.dto';
import { UpdateArtistDTO } from '../dto/update-artist.dto';
import { Artist } from '../models/artist.entity';

@EntityRepository(Artist)
export class ArtistRepository extends Repository<Artist> {
  async createArtist(
    addArtistDTO: AddArtistDTO,
    albumListTmp?: Album[],
    songListTmp?: Song[],
  ): Promise<Artist> {
    const { name, isBand } = addArtistDTO;
    const artist = new Artist();
    artist.name = name;
    artist.isBand = isBand;
    // if (albumListTmp) {
    //   artist.albumList = albumListTmp;
    // }
    // if (songListTmp) {
    //   artist.songList = songListTmp;
    // }
    return await artist.save();
  }

  async updateArtist(
    artist: Artist,
    UpdateArtistDTO: UpdateArtistDTO,
  ): Promise<Artist> {
    artist.name = UpdateArtistDTO.name;
    artist.isBand = UpdateArtistDTO.isBand;
    return await artist.save();
  }

  async deleteArtist(artist: Artist): Promise<Artist> {
    return await artist.remove();
  }
}
