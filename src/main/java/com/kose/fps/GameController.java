package com.kose.fps;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.InvalidMediaTypeException;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URI;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

//TODO mkose CrossOrigin'i düzelt
@CrossOrigin("*")
@RestController
public class GameController {
    private final GameRepository repository;

    public GameController(GameRepository repository) {
        this.repository = repository;
    }

    @PostMapping(path = "/getGamesByName", produces = MediaType.APPLICATION_JSON_VALUE)
    public FPSResponseBuilder<List<GameResponse>> getGamesByName(@RequestBody Game game) {
        List<Game> gameList = repository.findByNameRegex(String.format(".*%s.*", game.getName()));

        Collections.shuffle(gameList);
        sortListByPlatformSize(gameList);
        if (gameList.isEmpty()) {
            return FPSResponseBuilder.<List<GameResponse>>getInstance().status(HttpStatus.NOT_FOUND).body(null);
        }
        return FPSResponseBuilder.<List<GameResponse>>getInstance().status(HttpStatus.OK).body(
                gameList.stream().map(GameResponse::new).collect(Collectors.toList())
        );
    }


    /**
     * changes the specific items (items that have few platforms) index
     *                 so that they can be in one line at screen
     */
    private void sortListByPlatformSize(List<Game> gameList) {
        int tempIndex = -1;
        for (int i = 0; i < gameList.size(); i++) {
            if (gameList.get(i).getPlatform().size() > 2) {
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
        game.setMediaType(file.getContentType());
        repository.save(game);
    }

    @GetMapping("/image/{id}")
    public ResponseEntity<byte[]> image(@PathVariable String id) {
        Game game = repository.findById(id).orElseThrow();

        if (game.image == null || game.image.length == 0) {
            return ResponseEntity.status(HttpStatus.TEMPORARY_REDIRECT)
                    .location(URI.create("/game/default.png"))
                    .build();
        }

        MediaType mediaType;
        try {
            mediaType = MediaType.parseMediaType(game.mediaType);
        } catch (InvalidMediaTypeException e) {
            mediaType = MediaType.APPLICATION_OCTET_STREAM;
        }
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_TYPE, mediaType.toString())
                .body(game.image);
    }

}

class GameResponse {
    public final String id;
    public final String name;
    public final List<Platform> platform;

    public GameResponse(Game game) {
        this.id = game.id;
        this.name = game.name;
        this.platform = game.getPlatform();
    }
}