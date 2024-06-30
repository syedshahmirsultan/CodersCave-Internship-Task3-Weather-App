export interface WeatherData {
    weather: { icon: string; main: string }[];
    main: { temp: number; feels_like: number; humidity: number };
    wind: { speed: number };
    name: string;
  }