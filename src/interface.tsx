export interface Agentes {
    uuid: string;
    displayName: string;
    description: string;
    developerName: string;
    characterTags: null;
    displayIcon: string;
    displayIconSmall: string;
    bustPortrait: string;
    fullPortrait: string;
    fullPortraitV2: string;
    killfeedPortrait: string;
    background: string;
    backgroundGradientColors: string[];
    assetPath: string;
    isFullPortraitRightFacing: boolean;
    isPlayableCharacter: boolean;
    isAvailableForTest: boolean;
    isBaseContent: boolean;
    role: Role;
    recruitmentData: null;
    abilities: Ability[];
    voiceLine: null;
}

export interface Ability {
    slot: string;
    displayName: string;
    description: string;
    displayIcon: string;
}

export interface Role {
    uuid: string;
    displayName: string;
    description: string;
    displayIcon: string;
    assetPath: string;
}
export interface Mapas {
    uuid:                 string;
    displayName:          string;
    narrativeDescription: string;
    tacticalDescription:  string;
    coordinates:          string;
    displayIcon:          string;
    listViewIcon:         string;
    splash:               string;
    assetPath:            string;
    mapUrl:               string;
    xMultiplier:          number;
    yMultiplier:          number;
    xScalarToAdd:         number;
    yScalarToAdd:         number;
    callouts:             Callout[];
}

export interface Callout {
    regionName:      string;
    superRegionName: string;
    location:        Location;
}

export interface Location {
    x: number;
    y: number;
}
