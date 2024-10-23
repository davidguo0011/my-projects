import constructOptimisedImageUrl from "../../../utils/imageOptimisation/constructOptimisedImageUrl";

const formatAmenities = (amenities: string[]) => {
    let formattedAmenities: any[] = [];

    amenities?.map((amenity: any) => {
        formattedAmenities.push({
            "@type": "LocationFeatureSpecification",
            name: amenity,
            value: true,
        });
    });

    return formattedAmenities;
};

const checkPetsAllowed = (houseRules: string[]) => {
    let petsAllowed = true;

    houseRules?.forEach((rule) => {
        if (rule.toLowerCase().includes("no pets")) {
            petsAllowed = false;
        }
    });

    return petsAllowed;
};

const checkSmokingAllowed = (houseRules: string[]) => {
    let smokingAllowed = true;

    houseRules?.forEach((rule) => {
        if (rule.toLowerCase().includes("no smoking")) {
            smokingAllowed = false;
        }
    });

    return smokingAllowed;
};

const formatCheckInCheckOutTime = (time: string) => {
    if (time) {
        const timeString = time.toString().padStart(4, "0");
        return timeString.slice(0, 2) + ":" + timeString.slice(2);
    }
};

const getCancellationPolicy = (cancellationPolicy: string) => {
    switch (cancellationPolicy) {
        case "flexible":
            return "You will get a full refund of unspent nights minus service fee and cleaning fee if applied.";
        case "moderate":
            return "You will get a 50% refund of unspent nights minus service fee and cleaning fee if applied.";
        case "strict":
            return "If you cancel, you won’t be refunded except in an exceptional circumstance.";
        default:
            return "";
    }
};

const getAdditionalProperties = (listing: any) => {
    let additionalProperties = [];

    if (listing && listing.cleaningFee && listing.cleaningFee > 0) {
        additionalProperties.push({
            "@type": "PropertyValue",
            name: "Cleaning Fee",
            value: `$${Number(listing.cleaningFee / 100).toFixed(2)}`,
        });
    }

    if (listing && listing.deposit && listing.deposit > 0) {
        additionalProperties.push({
            "@type": "PropertyValue",
            name: "Security Deposit",
            value: `$${Number(listing.deposit / 100).toFixed(2)}`,
        });
    }
};

const getReviews = (reviews: any) => {
    let formattedReviews: any[] = [];

    if (reviews && reviews.length > 0) {
        reviews.map((review: any) => {
            formattedReviews.push({
                "@type": "Review",
                reviewRating: {
                    "@type": "Rating",
                    ratingValue: review.rating,
                    bestRating: "5",
                },
                author: {
                    "@type": "Person",
                    name: review?.UserModel?.firstName ? `${review?.UserModel?.firstName} ${review?.UserModel?.lastName}` : `${review?.externalFirstName} ${review?.externalLastName}`,
                },
                datePublished: review.date,
                reviewBody: review.body,
            });
        });
    }

    return formattedReviews;
};

export const generateJsonLd = (listing: any) => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "VacationRental",
        name: `${listing?.propertyTitle}`,
        description: `${listing?.propertyDescription}`,
        url: `https://anystay.com.au/listing/${listing?.id}`,
        image: listing?.listingImages?.map((image: any) => constructOptimisedImageUrl(JSON.parse(image as string).key)),
        priceRange: `$${listing?.minimumPrice} - $500`,
        address: {
            "@type": "PostalAddress",
            streetAddress: `${listing?.unitNumber ? `${listing?.unitNumber}/` : ""}${listing?.streetNumber} ${listing?.street}`,
            addressLocality: `${listing?.suburb}`,
            addressRegion: `${listing?.city}`,
            postalCode: `${listing?.postcode}`,
            addressCountry: "AU",
        },
        amenityFeature: formatAmenities(listing?.amenities),
        numberOfRooms: listing?.RoomModels?.items?.length,
        numberOfBedrooms: listing?.bedrooms,
        numberOfBathrooms: listing?.bathrooms,
        accommodationCategory: `${listing?.propertyType}`,
        petsAllowed: checkPetsAllowed(listing?.houseRules),
        maximumAttendeeCapacity: listing?.guests,
        // "availabilityStarts": "2024-06-01",
        // "availabilityEnds": "2024-09-30",
        // "potentialAction": {
        // "@type": "ReserveAction",
        // "target": {
        //     "@type": "EntryPoint",
        //     "urlTemplate": "https://www.yourbookingwebsite.com/book/seaside-villa-retreat?checkIn={checkInDate}&checkOut={checkOutDate}&guests={guestCount}",
        //     "actionPlatform": [
        //     "http://schema.org/DesktopWebPlatform",
        //     "http://schema.org/MobileWebPlatform",
        //     "http://schema.org/IOSPlatform",
        //     "http://schema.org/AndroidPlatform"
        //     ]
        // },
        // "result": {
        //     "@type": "LodgingReservation",
        //     "name": "Seaside Villa Retreat Reservation"
        // }
        // },
        geo: {
            "@type": "GeoCoordinates",
            latitude: `${listing?.location.lat}`,
            longitude: `${listing?.location.lon}`,
        },
        hasMap: `https://www.google.com/maps?q=${listing?.location.lat},${listing?.location.lon}`,
        checkinTime: formatCheckInCheckOutTime(listing?.checkInTime),
        checkoutTime: formatCheckInCheckOutTime(listing?.checkOutTime),
        smokingAllowed: checkSmokingAllowed(listing?.houseRules),
        floorSize: {
            "@type": "QuantitativeValue",
            value: listing?.areaValue,
            unitCode: "MTR",
        },
        cancelationPolicy: getCancellationPolicy(listing?.cancellationPolicy),
        // "availableLanguage": ["English", "Spanish", "French"],
        occupancy: {
            "@type": "QuantitativeValue",
            minValue: 1,
            maxValue: listing?.guests,
        },
        additionalProperty: getAdditionalProperties(listing),
        review: getReviews(listing?.ReviewStayModels?.items),
        aggregateRating:
            listing?.ReviewStayModels?.items?.length > 0
                ? {
                      "@type": "AggregateRating",
                      ratingValue: `${listing?.overallAverage / 10}`,
                      reviewCount: `${listing?.ReviewStayModels?.items?.length}`,
                  }
                : {},
        // "offers": [
        // {
        //     "@type": "Offer",
        //     "name": "Summer Special",
        //     "description": "20% off for stays of 7 nights or more",
        //     "validFrom": "2024-06-01",
        //     "validThrough": "2024-08-31"
        // }
        // ]
    };

    return jsonLd;
};
