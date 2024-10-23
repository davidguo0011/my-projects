export interface RoomModel {
    createdAt: string;
    id: string;
    images: string[];
    listingmodelID: string;
    owner: string;
    roomAmenities: string[];
    roomBeds: string[];
    roomDescription: string;
    roomTitle: string;
    roomType: string;
    updatedAt: string;
    userhostmodelID: string | null;
}
