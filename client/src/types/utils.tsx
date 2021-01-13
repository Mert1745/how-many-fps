import {Frame, PlatformName} from "./types";
import ps5_giraffe from "../img/playstation_5_giraffe.png";
import seriesS_giraffe from "../img/series_s_giraffe.png";
import seriesX_giraffe from "../img/series_x_giraffe.png";
import _30fps from "../img/30fps_bar.png";
import _60fps from "../img/60fps_bar.png";
import _120fps from "../img/120fps_bar.png";

export const getPlatformName = (name: PlatformName) => {
    if (name === PlatformName.PLAYSTATION_5) {
        return "PlayStation 5";
    } else if (name === PlatformName.XBOX_SERIES_S) {
        return "Xbox Series S";
    } else if (name === PlatformName.XBOX_SERIES_X) {
        return "Xbox Series X";
    }
};

export const getPlatformsGiraffe = (name: PlatformName) => {
    if (name === PlatformName.PLAYSTATION_5) {
        return ps5_giraffe;
    } else  if (name === PlatformName.XBOX_SERIES_S) {
        return seriesS_giraffe;
    } else  if (name === PlatformName.XBOX_SERIES_X) {
        return seriesX_giraffe;
    }
};

export const getPlatformFrameBar = (frame: Frame) => {
    if (frame === Frame._30) {
        return _30fps;
    } else  if (frame === Frame._60) {
        return _60fps;
    } else  if (frame === Frame._120) {
        return _120fps;
    }
};