package com.ironfit.backend.repositories;

import com.ironfit.backend.domain.treino.FichaDeTreino;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface FichaTreinoRepository extends MongoRepository<FichaDeTreino, String> {
    List<FichaDeTreino> findByUsuarioId(String usuarioId);
}