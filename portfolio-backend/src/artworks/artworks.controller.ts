import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ArtworksService } from './artworks.service';
import { Artwork } from './artwork.model';

@Controller('artworks')
export class ArtworksController {
  constructor(private readonly artworksService: ArtworksService) {}

  @Get()
  getAllArtworks(): Artwork[] {
    try {
      return this.artworksService.getAllArtworks();
    } catch (error) {
      console.error('Error in getAllArtworks controller:', error.message);
      throw error;
    }
  }

  @Post()
  addArtwork(@Body() artwork: Artwork): Artwork {
    try {
      return this.artworksService.addArtwork(artwork);
    } catch (error) {
      console.error('Error in addArtwork controller:', error.message);
      throw error;
    }
  }

  @Put(':id')
  updateArtwork(@Param('id') id: string, @Body() artwork: Artwork): Artwork {
    try {
      return this.artworksService.updateArtwork(+id, artwork);
    } catch (error) {
      console.error('Error in updateArtwork controller:', error.message);
      throw error;
    }
  }

  @Delete(':id')
  deleteArtwork(@Param('id') id: string): void {
    try {
      this.artworksService.deleteArtwork(+id);
    } catch (error) {
      console.error('Error in deleteArtwork controller:', error.message);
      throw error;
    }
  }
}
