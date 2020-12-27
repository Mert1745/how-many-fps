package com.kose.fps;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface GameRepository extends MongoRepository<Game, String> {
    Game findGameByName(String name);

    @Query(value = "{'name': {$regex : ?0, $options: 'i'}}")
    List<Game> findByNameRegex(String name);
}
