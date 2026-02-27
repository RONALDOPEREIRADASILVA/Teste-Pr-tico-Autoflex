package com.factory.mrp.controller;

import com.factory.mrp.model.ProductIngredient;
import com.factory.mrp.repository.ProductIngredientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/ingredients")
@CrossOrigin(origins = "*")
public class ProductIngredientController {



@Autowired
private ProductIngredientRepository repository;

@GetMapping
public List<ProductIngredient> getAll(){
return repository.findAll();
}

@PostMapping
public  ProductIngredient saveIngredient (@RequestBody ProductIngredient ingredient){
return repository.save(ingredient);
}
}



