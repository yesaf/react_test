interface Links {
    flickr_images: string[];
}

interface FlightData {
    mission_name: string;
    links: Links;

}

export interface Tour {
    id: string;
    title: string;
    flight: null | FlightData;
}

export interface ToursQuery {
    histories: Tour[];
}


