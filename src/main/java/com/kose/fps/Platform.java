package com.kose.fps;

public class Platform {
    private PlatformName name;
    private Resolution resolution;
    private Frame frame;
    private boolean hasIssues;
    private boolean isDynamicResolution;

    public Platform() {
    }

    public boolean isHasIssues() {
        return hasIssues;
    }

    public void setHasIssues(boolean hasIssues) {
        this.hasIssues = hasIssues;
    }

    public boolean isDynamicResolution() {
        return isDynamicResolution;
    }

    public void setDynamicResolution(boolean dynamicResolution) {
        isDynamicResolution = dynamicResolution;
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
