package com.factory.mrp.controller;

import com.factory.mrp.model.Product;
import com.factory.mrp.model.ProductIngredient;
import com.factory.mrp.model.AnalysisDTO;
import com.factory.mrp.repository.ProductRepository;
import com.factory.mrp.repository.ProductIngredientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.ArrayList;
import java.util.List;
@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "*")
public class ProductController {
@Autowired
private ProductRepository repository;
@Autowired
private ProductIngredientRepository ingredientRepository;
@GetMapping
public List<Product> getAll() {
return repository.findAll();
}
@PostMapping
public Product save(@RequestBody Product product) {
return repository.save(product);
}

@GetMapping("/analysis")
public List<AnalysisDTO> getProductionAnalysis() {
    List<Product> products = repository.findAllByOrderByMarketValueDesc();
        List<AnalysisDTO> analysisResult = new ArrayList<>();
        for (Product product : products) {
            List<ProductIngredient> ingredients = ingredientRepository.findByProduct(product);
            BigDecimal possibleUnits =null;
            for (ProductIngredient ing :ingredients){
                BigDecimal stock = ing.getRawMaterial().getStockQuantity();
                BigDecimal needed = ing.getQuantityNeeded();
                BigDecimal canMake = stock.divide( needed , 0, RoundingMode.FLOOR);
            
                if (possibleUnits ==null || canMake.compareTo(possibleUnits) <0) {
                    possibleUnits = canMake;
                }
            }
            BigDecimal finalUnits =(possibleUnits == null) ? BigDecimal.ZERO : possibleUnits;
            BigDecimal totalValue = finalUnits.multiply(product.getPrice());

            analysisResult.add(new AnalysisDTO(product.getName(), finalUnits , totalValue));
        }
        return analysisResult;
}
}
