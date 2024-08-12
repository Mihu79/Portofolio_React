"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworksService = void 0;
const common_1 = require("@nestjs/common");
let ArtworksService = class ArtworksService {
    constructor() {
        this.artworks = [
            {
                id: 1,
                title: 'Sample Artwork',
                description: 'This is a sample description',
                imageUrl: 'https://cloudinary-marketing-res.cloudinary.com/images/w_1000,c_scale/v1679921049/Image_URL_header/Image_URL_header-png?_i=AA',
                clientLink: 'https://example.com',
                status: 'displayed',
            },
        ];
    }
    getAllArtworks() {
        try {
            if (!this.artworks) {
                throw new Error('Artworks data is not available');
            }
            return this.artworks;
        }
        catch (error) {
            console.error('Error in getAllArtworks:', error.message);
            throw error;
        }
    }
    addArtwork(artwork) {
        try {
            this.artworks.push({ ...artwork, id: this.artworks.length + 1 });
            return artwork;
        }
        catch (error) {
            console.error('Error in addArtwork:', error.message);
            throw error;
        }
    }
    updateArtwork(id, updatedArtwork) {
        try {
            const index = this.artworks.findIndex(artwork => artwork.id === id);
            if (index === -1) {
                throw new Error('Artwork not found');
            }
            this.artworks[index] = { ...updatedArtwork, id };
            return this.artworks[index];
        }
        catch (error) {
            console.error('Error in updateArtwork:', error.message);
            throw error;
        }
    }
    deleteArtwork(id) {
        try {
            this.artworks = this.artworks.filter(artwork => artwork.id !== id);
        }
        catch (error) {
            console.error('Error in deleteArtwork:', error.message);
            throw error;
        }
    }
};
exports.ArtworksService = ArtworksService;
exports.ArtworksService = ArtworksService = __decorate([
    (0, common_1.Injectable)()
], ArtworksService);
//# sourceMappingURL=artworks.service.js.map