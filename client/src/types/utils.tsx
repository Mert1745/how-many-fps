import {Frame, PlatformName} from "./types";
import ps5_30fps_giraffe from "../img/giraffes/ps5_30fps.png";
import ps5_60fps_giraffe from "../img/giraffes/ps5_60fps.png";
import ps5_120fps_giraffe from "../img/giraffes/ps5_120fps.png";
import seriesS_30fps_giraffe from "../img/giraffes/series_s_30fps.png";
import seriesS_60fps_giraffe from "../img/giraffes/series_s_60fps.png";
import seriesS_120fps_giraffe from "../img/giraffes/series_s_120fps.png";
import seriesX_30fps_giraffe from "../img/giraffes/series_x_30fps.png";
import seriesX_60fps_giraffe from "../img/giraffes/series_x_60fps.png";
import seriesX_120fps_giraffe from "../img/giraffes/series_x_120fps.png";
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

function getPS5Giraffe(frame: Frame) {
    if (frame === Frame._30) {
        return ps5_30fps_giraffe;
    } else  if (frame === Frame._60) {
        return ps5_60fps_giraffe;
    } else  if (frame === Frame._120) {
        return ps5_120fps_giraffe;
    }
}

function getSeriesSGiraffe(frame: Frame) {
    if (frame === Frame._30) {
        return seriesS_30fps_giraffe;
    } else  if (frame === Frame._60) {
        return seriesS_60fps_giraffe;
    } else  if (frame === Frame._120) {
        return seriesS_120fps_giraffe;
    }
}

function getSeriesXGiraffe(frame: Frame) {
    if (frame === Frame._30) {
        return seriesX_30fps_giraffe;
    } else  if (frame === Frame._60) {
        return seriesX_60fps_giraffe;
    } else  if (frame === Frame._120) {
        return seriesX_120fps_giraffe;
    }
}

export const getPlatformsGiraffe = (name: PlatformName, frame: Frame) => {
    if (name === PlatformName.PLAYSTATION_5) {
        return getPS5Giraffe(frame);
    } else  if (name === PlatformName.XBOX_SERIES_S) {
        return getSeriesSGiraffe(frame);
    } else  if (name === PlatformName.XBOX_SERIES_X) {
        return getSeriesXGiraffe(frame);
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