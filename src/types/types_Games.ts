import {PlatformInfo} from "@/types/types_Platform";

export interface Game {
  name: string;
  metacritic: number;
  rating: number;
  background_image: string;
  slug: string;
  platforms: PlatformInfo[];
}