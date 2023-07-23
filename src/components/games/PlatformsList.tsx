import {PlatformInfo} from "@/types/types_Platform";
import Image from "next/image";

interface PlatformsListPropsType {
  platforms: PlatformInfo[];
}

interface PlatformIconOrNameType {
  isIcon: boolean;
  value: string;
}

const stringIncludes = (haystack: string, needle: string) => {
  if (haystack.includes(needle)) {
    return haystack;
  }
  return '';
}

const getPlatformIconSrcIfExists = (platformName: string): string => {
  switch (platformName) {
    case 'PC':
    case stringIncludes(platformName, 'Windows'):
      return '/assets/game-platforms/windows.svg';
    case 'Linux':
      return '/assets/game-platforms/linux.svg';
    case 'Android':
      return '/assets/game-platforms/android.svg';
    case 'Classic Macintosh':
    case 'macOS':
    case 'iOS':
      return '/assets/game-platforms/apple.svg';
    case stringIncludes(platformName, 'Wii'):
      return '/assets/game-platforms/wii.svg';
    case stringIncludes(platformName, 'Switch'):
      return '/assets/game-platforms/switch.svg';
    case stringIncludes(platformName, '3DS'):
      return '/assets/game-platforms/ds.svg';
    case stringIncludes(platformName, 'Gamecube'):
      return '/assets/game-platforms/gamecube.svg';
    case stringIncludes(platformName, 'PlayStation'):
    case stringIncludes(platformName, 'Vita'):
      return '/assets/game-platforms/playstation.svg';
    case stringIncludes(platformName, 'Xbox'):
      return '/assets/game-platforms/xbox.svg';
    default :
      return '';
  }
}

const getPlatformsIconsOrNames = (platformsList: PlatformInfo[]) : PlatformIconOrNameType[]=> {
  let platformsIconsOrNamesList: PlatformIconOrNameType[] = [];
  platformsList.map((platform) => {
    const platformIconSrc = getPlatformIconSrcIfExists(platform.platform.name);


    if (!platformIconSrc) {
      platformsIconsOrNamesList.push(({
        isIcon: false,
        value: platform.platform.name
      }))
    }

    if (platformIconSrc && platformsIconsOrNamesList.filter(elem => elem.isIcon && elem.value === platformIconSrc).length === 0) {
      platformsIconsOrNamesList.push(({
        isIcon: true,
        value: platformIconSrc
      }))
    }
  });

  return platformsIconsOrNamesList;
}

export default function PlatformsList (platforms: PlatformsListPropsType ) {
  const platformsIconsOrNames = getPlatformsIconsOrNames(platforms.platforms)
  return (
    <div className="flex flex-row space-x-2">
      {platformsIconsOrNames.map((platformIconOrName, index) => {
        return <> {
          platformIconOrName.isIcon
          ?  <Image
              key={index}
              className="invert px-0"
              src={platformIconOrName.value}
              width={16}
              height={16}
              alt={platformIconOrName.value}
            />
          : <span key={index} className="text-sm">{platformIconOrName.value}</span>
        } </>
      })}
    </div>

  )
}