import { EntityRepository, Repository } from 'typeorm';
import { AddArtistDTO } from '../dto/add-artist.dto';
import { UpdateArtistDTO } from '../dto/update-artist.dto';
import { Artist } from './artist.entity';

@EntityRepository(Artist)
export class ArtistRepository extends Repository<Artist> {
  async createArtist(addArtistDTO: AddArtistDTO): Promise<Artist> {
    const { name, isBand } = addArtistDTO;
    const artist = new Artist();
    artist.name = name;
    artist.isBand = isBand;
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
