export type GameType = {
    name: string;
    image: any;
    platform: Platform[];
}

type Platform = {
    name: PlatformName;
    resolution: string;
    frame: Frame;
    hasIssues?: boolean;
    isDynamicResolution?: boolean;
    mode?: Mode;
    info?: string;
}

export enum PlatformName {
    PLAYSTATION_5 = "PLAYSTATION_5",
    XBOX_SERIES_S = "XBOX_SERIES_S",
    XBOX_SERIES_X = "XBOX_SERIES_X"
}

export enum Mode {
    PERFORMANCE = "PERFORMANCE",
    QUALITY = "QUALITY",
}

export enum Frame {
    _30 = "_30",
    _60 = "_60",
    _120 ="_120",
}


