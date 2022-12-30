export interface Location {
  city?: string;
  country?: string;
  time: string;
}

export interface Weather {
    main: string;
    description: string;
    minTemp: string;
    maxTemp: string;
    humidity: string;
    time: string;
  }