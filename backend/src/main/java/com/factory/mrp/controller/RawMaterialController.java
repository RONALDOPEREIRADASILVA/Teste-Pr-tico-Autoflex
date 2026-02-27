package com.factory.mrp.controller;

import com.factory.mrp.model.RawMaterial;
import com.factory.mrp.repository.RawMaterialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;




@RestController
@RequestMapping("/api/materials")
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
    
    
}
