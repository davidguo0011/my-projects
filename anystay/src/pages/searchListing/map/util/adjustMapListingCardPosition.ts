export default function adjustMapListingCardPosition(location: { lat: number; lng: number }, map: google.maps.Map, markerWidth: number) {
    const overlay = new window.google.maps.OverlayView();
    overlay.draw = function () {};
    overlay.setMap(map);
    // Wait for the map to be fully loaded
    const projection = overlay.getProjection();
    if (!projection) {
        return new window.google.maps.LatLng(-27.47, 153.021);
    }

    // Convert the LatLng location to pixel coordinates
    let markerPoint = projection.fromLatLngToContainerPixel(new window.google.maps.LatLng(location.lat, location.lng));
    let centerPoint = projection.fromLatLngToContainerPixel(new window.google.maps.LatLng(map.getCenter() as google.maps.LatLng));
    if (centerPoint && markerPoint) {
        let newCenterPosition = { x: centerPoint.x, y: centerPoint.y };
        // Check if the location does not cover the zoom control
        if (window.innerWidth >= 768 && markerPoint.y - 12 - 394.75 < 24 + 82 && markerPoint.x + markerWidth / 2 + 159 > map.getDiv().offsetWidth - 24 - 42) {
            let rightBound = map.getDiv().offsetWidth - 24 - 42;
            newCenterPosition.x = centerPoint.x - (rightBound - 159 - (markerPoint.x + markerWidth / 2));
            newCenterPosition.y = centerPoint.y - (24 + 82 + 394.75 + 12 - markerPoint.y);
        }

        // Check if the location is within the right edge
        if (window.innerWidth < 768 && markerPoint.x + markerWidth / 2 + 100 > map.getDiv().offsetWidth - 16) {
            let rightBound = map.getDiv().offsetWidth - 16;
            newCenterPosition.x = centerPoint.x - (rightBound - 100 - (markerPoint.x + markerWidth / 2));
            console.log("right edge");
        } else if (window.innerWidth >= 768 && markerPoint.x + markerWidth / 2 + 159 > map.getDiv().offsetWidth - 24 && markerPoint.y - 12 - 394.75 >= 24 + 82) {
            let rightBound = map.getDiv().offsetWidth - 24;
            newCenterPosition.x = centerPoint.x - (rightBound - 159 - (markerPoint.x + markerWidth / 2));
        }

        // Check if the location is within the left edge
        if (window.innerWidth < 768 && markerPoint.x + markerWidth / 2 - 100 < 16) {
            newCenterPosition.x = centerPoint.x - (100 + 16 - (markerPoint.x + markerWidth / 2));
        } else if (window.innerWidth >= 768 && markerPoint.x + markerWidth / 2 - 159 < 24) {
            newCenterPosition.x = centerPoint.x - (159 + 24 - (markerPoint.x + markerWidth / 2));
        }

        // Check if the location is within the top edge
        if (window.innerWidth < 768 && markerPoint.y - 12 - 275.67 < 16) {
            newCenterPosition.y = centerPoint.y - (16 + 275.67 + 12 - markerPoint.y);
        } else if (window.innerWidth >= 768 && markerPoint.y - 12 - 394.75 < 24 && markerPoint.x + markerWidth / 2 + 159 <= map.getDiv().offsetWidth - 24 - 42) {
            newCenterPosition.y = centerPoint.y - (24 + 394.75 + 12 - markerPoint.y);
        }

        let newCenterLatLng = projection.fromContainerPixelToLatLng(newCenterPosition as google.maps.Point);
        overlay.setMap(null);
        return newCenterLatLng;
    } else {
        return new window.google.maps.LatLng(-27.47, 153.021);
    }
}
