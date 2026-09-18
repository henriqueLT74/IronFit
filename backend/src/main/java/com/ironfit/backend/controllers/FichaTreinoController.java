package com.ironfit.backend.controllers;

import com.ironfit.backend.domain.treino.FichaDeTreino;
import com.ironfit.backend.repositories.FichaTreinoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/fichas")
public class FichaTreinoController {

    @Autowired
    private FichaTreinoRepository fichaRepository;

    @PostMapping
    public ResponseEntity<FichaDeTreino> criarFicha(@RequestBody FichaDeTreino ficha, Authentication authentication) {
        String usuarioEmail = authentication.getName();
        ficha.setUsuarioId(usuarioEmail);
        FichaDeTreino novaFicha = fichaRepository.save(ficha);
        return ResponseEntity.ok(novaFicha);
    }

    @GetMapping
    public ResponseEntity<List<FichaDeTreino>> listarMinhasFichas(Authentication authentication) {
        String usuarioEmail = authentication.getName();
        List<FichaDeTreino> fichas = fichaRepository.findByUsuarioId(usuarioEmail);
        return ResponseEntity.ok(fichas);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarFicha(@PathVariable String id, Authentication authentication) {
        String usuarioEmail = authentication.getName();
        var ficha = fichaRepository.findById(id);

        if (ficha.isPresent() && ficha.get().getUsuarioId().equals(usuarioEmail)) {
            fichaRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();
    }
}