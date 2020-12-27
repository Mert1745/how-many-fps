package com.kose.fps;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//TODO mkose CrossOrigin'i düzelt
@CrossOrigin("*")
@RestController
public class HelloWorldController {
    private final GameRepository repository;

    public HelloWorldController(GameRepository repository) {
        this.repository = repository;
    }

//    @GetMapping(path = "/getListOfGames", produces = MediaType.APPLICATION_JSON_VALUE)
//    public FPSResponseBuilder<String> getListOfGames() {
////        repository.save(new Game("Halo", Platform.XBOX_SERIES_X));
//        Game game1 = new Game();
//        game1.setName("Cyberpunk_2077");
//        Platform platform = new Platform();
//        platform.setFrame(Frame._60);
//        platform.setResolution(Resolution._1080P);
//        platform.setName(PlatformName.PLAYSTATION_5);
//        game1.getPlatform().add(platform);
//        repository.save(game1);
//        Game game = repository.findGameByName("Cyberpunk_2077");
//        return FPSResponseBuilder.<String>getInstance().status(HttpStatus.OK).body(game.getName());
////        return new FPSResponseBuilder<>(HttpStatus.OK, game.getName());
//    }

    @PostMapping(path = "/getGamesByName", produces = MediaType.APPLICATION_JSON_VALUE)
    public FPSResponseBuilder<List<Game>> getGamesByName(@RequestBody Game game) {
        List<Game> gameList = repository.findByNameRegex(String.format(".*%s.*", game.getName()));

        if (gameList.isEmpty()) {
            return FPSResponseBuilder.<List<Game>>getInstance().status(HttpStatus.NOT_FOUND).body(null);
        }
        return FPSResponseBuilder.<List<Game>>getInstance().status(HttpStatus.OK).body(gameList);
    }
}
