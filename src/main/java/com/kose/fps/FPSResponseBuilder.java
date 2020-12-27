package com.kose.fps;

import org.springframework.http.HttpStatus;

public class FPSResponseBuilder<T>{
    private HttpStatus status;
    private T body;

    private FPSResponseBuilder(){
    }

    public static <T> FPSResponseBuilder<T> getInstance(){
        return new FPSResponseBuilder<T>();
    }

    public FPSResponseBuilder<T> status(HttpStatus status){
        this.status = status;
        return this;
    }

    public FPSResponseBuilder<T> body(T body){
        this.body = body;
        return this;
    }

    public HttpStatus getStatus() {
        return status;
    }

    public void setStatus(HttpStatus status) {
        this.status = status;
    }

    public T getBody() {
        return body;
    }

    public void setBody(T body) {
        this.body = body;
    }
}
