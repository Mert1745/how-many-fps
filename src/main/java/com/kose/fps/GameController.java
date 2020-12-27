package com.kose.fps;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//TODO mkose CrossOrigin'i düzelt
@CrossOrigin("*")
@RestController
public class GameController {
    private final GameRepository repository;

    public GameController(GameRepository repository) {
        this.repository = repository;
    }

    @PostMapping(path = "/getGamesByName", produces = MediaType.APPLICATION_JSON_VALUE)
    public FPSResponseBuilder<List<Game>> getGamesByName(@RequestBody Game game) {

        List<Game> gameList = repository.findByNameRegex(String.format(".*%s.*", game.getName()));

        if (gameList.isEmpty()) {
            return FPSResponseBuilder.<List<Game>>getInstance().status(HttpStatus.NOT_FOUND).body(null);
        }
        return FPSResponseBuilder.<List<Game>>getInstance().status(HttpStatus.OK).body(gameList);
    }


//    Game game1 = new Game();
//        game1.setName("Cyberpunk 2077");
//    Platform platform = new Platform();
//        platform.setFrame(Frame._60);
//        platform.setResolution(Resolution._1080P);
//        platform.setName(PlatformName.PLAYSTATION_5);
//        platform.setHasIssues(Boolean.FALSE);
//        platform.setDynamicResolution(Boolean.TRUE);
//        game1.getPlatform().add(platform);
//
//        platform.setFrame(Frame._60);
//        platform.setResolution(Resolution._1080P);
//        platform.setName(PlatformName.XBOX_SERIES_X);
//        platform.setHasIssues(Boolean.FALSE);
//        platform.setDynamicResolution(Boolean.TRUE);
//        game1.getPlatform().add(platform);
//
//        platform.setFrame(Frame._30);
//        platform.setResolution(Resolution._1080P);
//        platform.setName(PlatformName.XBOX_SERIES_X);
//        platform.setHasIssues(Boolean.FALSE);
//        platform.setDynamicResolution(Boolean.TRUE);
//        game1.getPlatform().add(platform);
//
//
//    Game game2 = new Game();
//        game2.setName("Call of Duty: Cold War");
//    Platform platform1 = new Platform();
//        platform1.setFrame(Frame._60);
//        platform1.setResolution(Resolution._1080P);
//        platform1.setName(PlatformName.PLAYSTATION_5);
//        platform1.setHasIssues(Boolean.FALSE);
//        platform1.setDynamicResolution(Boolean.FALSE);
//        game2.getPlatform().add(platform1);
//
//        platform1.setFrame(Frame._60);
//        platform1.setResolution(Resolution._1080P);
//        platform1.setName(PlatformName.XBOX_SERIES_X);
//        platform1.setHasIssues(Boolean.FALSE);
//        platform1.setDynamicResolution(Boolean.FALSE);
//        game2.getPlatform().add(platform1);
//
//        platform1.setFrame(Frame._30);
//        platform1.setResolution(Resolution._1080P);
//        platform1.setName(PlatformName.XBOX_SERIES_X);
//        platform1.setHasIssues(Boolean.FALSE);
//        platform1.setDynamicResolution(Boolean.FALSE);
//        game2.getPlatform().add(platform1);
//
//
//        repository.save(game2);
//        repository.save(game1);

}
