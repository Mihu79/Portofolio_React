import { ArtworksService } from './artworks.service';
import { Artwork } from './artwork.model';
export declare class ArtworksController {
    private readonly artworksService;
    constructor(artworksService: ArtworksService);
    getAllArtworks(): Artwork[];
    addArtwork(artwork: Artwork): Artwork;
    updateArtwork(id: string, artwork: Artwork): Artwork;
    deleteArtwork(id: string): void;
}
