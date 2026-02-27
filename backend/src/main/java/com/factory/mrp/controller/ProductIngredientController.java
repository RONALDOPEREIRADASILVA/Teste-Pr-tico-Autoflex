package com.factory.mrp.controller;

import com.factory.mrp.model.Product;
import com.factory.mrp.model.ProductIngredient;
import com.factory.mrp.repository.ProductIngredientRepository;
import com.factory.mrp.repository.ProductRepository;
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

private final ProductRepository productRepository;

@Autowired
private ProductIngredientRepository repository;

ProductIngredientController(ProductRepository productRepository) {
this.productRepository = productRepository;
}

@GetMapping
public List<ProductIngredient> getAll(){
return repository.findAll();
}

@PostMapping
public Product createProduct(@RequestBody Product  product){
return productRepository.save(product);
}
}

    
    

