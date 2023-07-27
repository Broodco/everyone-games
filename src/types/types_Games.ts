import { PlatformInfo } from "@/types/types_Platform"

export interface Game {
  id: number
  name: string
  metacritic: number
  rating: number
  background_image: string
  slug: string
  platforms: PlatformInfo[]
}

export interface GameDetails {
  id: number
  slug: string
  name: string
  name_original: string
  description: string
  metacritic?: number
  released?: string
  tba?: boolean
  background_image?: string
  background_image_additional?: string
  website: string
  rating: number
  platforms: PlatformInfo[]
}
