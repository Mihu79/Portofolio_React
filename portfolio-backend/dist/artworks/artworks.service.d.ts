import { Artwork } from './artwork.model';
export declare class ArtworksService {
    private artworks;
    getAllArtworks(): Artwork[];
    addArtwork(artwork: Artwork): Artwork;
    updateArtwork(id: number, updatedArtwork: Artwork): Artwork;
    deleteArtwork(id: number): void;
}
