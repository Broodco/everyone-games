import {PlatformInfo} from "@/types/types_Platform";

export interface Game {
  name: string;
  metacritic: number;
  background_image: string;
  platforms: PlatformInfo[];
}