import { ReviewStayModel } from "./reviewStayModel";
import { RoomModel } from "./roomModel";

export interface ListingImageObject {
    alt: string;
    width: number;
    height: number;
    key: string;
    priority: number | null;
}

export interface ListingModel {
    amenities: string[];
    availabilityRange: string;
    approved: boolean;
    bathrooms: number;
    bedrooms: number;
    cancellationPolicy: string;
    city: string;
    cleaningFee: number;
    cleaningFrequency: string;
    country: string;
    createdAt: string;
    deposit: number;
    endDate?: Date | string;
    guests: number;
    draft: boolean;
    houseRules: string[];
    id: string;
    location: string;
    listingImages: string[] | ListingImageObject[];
    maximumPrice: number;
    maximumStay: number;
    minimumStay: number;
    minimumPrice: number;
    monthlyDiscount: number;
    postcode: string;
    onceOffPaymentsOnly: boolean;
    propertyDescription: string;
    propertyTitle: string;
    propertyType: string;
    state: string;
    status: string;
    startDate?: Date | string;
    street: string;
    streetNumber: string;
    suburb: string;
    typeOfPlace: string;
    totalPrice?: number;
    updatedAt: string;
    userhostmodelID: string;
    verified: boolean;
    weeklyDiscount: number;
    ReviewStayModels: { items: ReviewStayModel[] };
    RoomModels: { items: RoomModel[] };
    areaValue: number;
    areaUnit: string;
    beds: number;
}

export interface SearchListingModel {
    owner: string;
    location: { lat: number; lon: number };
    id: string;
    minimumPrice: number;
    propertyType: string;
    propertyTitle: string;
    overallAverage: number | null | undefined;
    suburb: string;
    totalReviews: number | null | undefined;
    listingImages: ListingImageObject[];
    typeOfPlace: string;
    beds: number;
    guests: number;
    startDate: string;
    endDate: string;
    totalPrice: number;
}
