import { Injectable } from '@nestjs/common';
import { Artwork } from './artwork.model';

@Injectable()
export class ArtworksService {
  private artworks: Artwork[] = [
    {
      id: 1,
      title: 'Sample Artwork',
      description: 'This is a sample description',
      imageUrl: 'https://cloudinary-marketing-res.cloudinary.com/images/w_1000,c_scale/v1679921049/Image_URL_header/Image_URL_header-png?_i=AA',
      clientLink: 'https://example.com',
      status: 'displayed',
    },
  ];

  getAllArtworks(): Artwork[] {
    try {
      // Simulează o problemă pentru a verifica tratarea erorilor
      if (!this.artworks) {
        throw new Error('Artworks data is not available');
      }
      return this.artworks;
    } catch (error) {
      console.error('Error in getAllArtworks:', error.message);
      throw error; // Re-throw the error to be caught by NestJS
    }
  }

  addArtwork(artwork: Artwork): Artwork {
    try {
      this.artworks.push({ ...artwork, id: this.artworks.length + 1 });
      return artwork;
    } catch (error) {
      console.error('Error in addArtwork:', error.message);
      throw error;
    }
  }

  updateArtwork(id: number, updatedArtwork: Artwork): Artwork {
    try {
      const index = this.artworks.findIndex(artwork => artwork.id === id);
      if (index === -1) {
        throw new Error('Artwork not found');
      }
      this.artworks[index] = { ...updatedArtwork, id };
      return this.artworks[index];
    } catch (error) {
      console.error('Error in updateArtwork:', error.message);
      throw error;
    }
  }

  deleteArtwork(id: number): void {
    try {
      this.artworks = this.artworks.filter(artwork => artwork.id !== id);
    } catch (error) {
      console.error('Error in deleteArtwork:', error.message);
      throw error;
    }
  }
}
