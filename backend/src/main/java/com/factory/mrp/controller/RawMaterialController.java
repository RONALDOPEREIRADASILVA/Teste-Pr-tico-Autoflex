package com.factory.mrp.controller;

import com.factory.mrp.model.RawMaterial;
import com.factory.mrp.repository.RawMaterialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/raw-materials")
@CrossOrigin(origins = "*")
public class RawMaterialController {

    @Autowired
    private RawMaterialRepository repository;

    @GetMapping
    public List<RawMaterial> getAll(){
        return repository.findAll();
    }

    @PostMapping
    public RawMaterial save(@RequestBody RawMaterial material) {
        return repository.save(material);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
    repository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
