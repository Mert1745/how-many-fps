package com.kose.fps;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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

        sortListByPlatformSize(gameList);

        if (gameList.isEmpty()) {
            return FPSResponseBuilder.<List<Game>>getInstance().status(HttpStatus.NOT_FOUND).body(null);
        }
        return FPSResponseBuilder.<List<Game>>getInstance().status(HttpStatus.OK).body(gameList);
    }


    /**
     * @param gameList changes the specific items (items that have few platforms) index
     *                 so that they can be in one line at screen
     */
    private void sortListByPlatformSize(List<Game> gameList) {
        int tempIndex = -1;
        for (int i = 0; i < gameList.size(); i++) {
            if (gameList.get(i).getPlatform().size() > 3) {
                continue;
            }

            if (tempIndex == -1) {
                tempIndex = i;
            } else {
                Game tempGame = gameList.get(i);
                gameList.remove(i);
                gameList.add(tempIndex + 1, tempGame);
                tempIndex = -1;
            }
        }
    }

    @PostMapping(path = "/addGame", produces = MediaType.ALL_VALUE, consumes = MediaType.ALL_VALUE)
    public void getGamesByName(@RequestParam("file") MultipartFile file, @RequestParam("json") String json) throws IOException {
        byte[] image = file.getBytes();
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(JsonParser.Feature.ALLOW_UNQUOTED_FIELD_NAMES, true);
        Game game = mapper.readValue(json, Game.class);
        game.setImage(image);
        repository.save(game);
    }
}
