import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddArtistDTO } from './dto/add-artist.dto';
import { UpdateArtistDTO } from './dto/update-artist.dto';
import { Artist } from './models/artist.entity';
import { ArtistRepository } from './models/artist.repository';

@Injectable()
export class ArtistService {
  constructor(
    @InjectRepository(ArtistRepository)
    private artistRepository: ArtistRepository,
  ) {}

  async createArtist(addArtistDTO: AddArtistDTO) {
    return await this.artistRepository.createArtist(addArtistDTO);
  }

  async getArtistById(id: number): Promise<Artist> {
    const found = await this.artistRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Artist with ID "${id}" not found`);
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
