"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtworksController = void 0;
const common_1 = require("@nestjs/common");
const artworks_service_1 = require("./artworks.service");
const artwork_model_1 = require("./artwork.model");
let ArtworksController = class ArtworksController {
    constructor(artworksService) {
        this.artworksService = artworksService;
    }
    getAllArtworks() {
        try {
            return this.artworksService.getAllArtworks();
        }
        catch (error) {
            console.error('Error in getAllArtworks controller:', error.message);
            throw error;
        }
    }
    addArtwork(artwork) {
        try {
            return this.artworksService.addArtwork(artwork);
        }
        catch (error) {
            console.error('Error in addArtwork controller:', error.message);
            throw error;
        }
    }
    updateArtwork(id, artwork) {
        try {
            return this.artworksService.updateArtwork(+id, artwork);
        }
        catch (error) {
            console.error('Error in updateArtwork controller:', error.message);
            throw error;
        }
    }
    deleteArtwork(id) {
        try {
            this.artworksService.deleteArtwork(+id);
        }
        catch (error) {
            console.error('Error in deleteArtwork controller:', error.message);
            throw error;
        }
    }
};
exports.ArtworksController = ArtworksController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ArtworksController.prototype, "getAllArtworks", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [artwork_model_1.Artwork]),
    __metadata("design:returntype", artwork_model_1.Artwork)
], ArtworksController.prototype, "addArtwork", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, artwork_model_1.Artwork]),
    __metadata("design:returntype", artwork_model_1.Artwork)
], ArtworksController.prototype, "updateArtwork", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArtworksController.prototype, "deleteArtwork", null);
exports.ArtworksController = ArtworksController = __decorate([
    (0, common_1.Controller)('artworks'),
    __metadata("design:paramtypes", [artworks_service_1.ArtworksService])
], ArtworksController);
//# sourceMappingURL=artworks.controller.js.map