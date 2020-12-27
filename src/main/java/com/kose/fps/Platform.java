package com.kose.fps;

public class Platform {
    private PlatformName name;
    private Resolution resolution;
    private Frame frame;

    public Platform() {
    }

    public PlatformName getName() {
        return name;
    }

    public void setName(PlatformName name) {
        this.name = name;
    }

    public Resolution getResolution() {
        return resolution;
    }

    public void setResolution(Resolution resolution) {
        this.resolution = resolution;
    }

    public Frame getFrame() {
        return frame;
    }

    public void setFrame(Frame frame) {
        this.frame = frame;
    }
}
