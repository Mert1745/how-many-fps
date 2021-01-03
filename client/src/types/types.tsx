export type GameType = {
    name: string;
    image: any;
    platform: Platform[];
}

type Platform = {
    name: PlatformName;
    resolution: Resolution;
    frame: Frame;
    hasIssues?: boolean;
    isDynamicResolution?: boolean;
}

enum PlatformName {
    PLAYSTATION_5 = "PLAYSTATION 5",
    XBOX_SERIES_S = "XBOX SERIES X",
    XBOX_SERIES_X = "XBOX SERIES S"
}

enum Resolution {
    _1080P = "1080P",
    _2K = "2K",
    _4K = "4K",
    _8K = "8K"
}

enum Frame {
    _30 ="30 FPS",
    _60 ="60 FPS",
    _120 ="120 FPS",
}


