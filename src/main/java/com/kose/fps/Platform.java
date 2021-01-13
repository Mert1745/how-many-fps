package com.kose.fps;

public class Platform {
    private PlatformName name;
    private String resolution;
    private Frame frame;
    private boolean hasIssues;
    private boolean isDynamicResolution;
    private Mode mode;

    public Platform() {
    }

    public Mode getMode() {
        return mode;
    }

    public void setMode(Mode mode) {
        this.mode = mode;
    }

    public boolean isDynamicResolution() {
        return isDynamicResolution;
    }

    public void setDynamicResolution(boolean dynamicResolution) {
        isDynamicResolution = dynamicResolution;
    }

    public boolean isHasIssues() {
        return hasIssues;
    }

    public void setHasIssues(boolean hasIssues) {
        this.hasIssues = hasIssues;
    }

    public PlatformName getName() {
        return name;
    }

    public void setName(PlatformName name) {
        this.name = name;
    }

    public String getResolution() {
        return resolution;
    }

    public void setResolution(String resolution) {
        this.resolution = resolution;
    }

    public Frame getFrame() {
        return frame;
    }

    public void setFrame(Frame frame) {
        this.frame = frame;
    }
}
