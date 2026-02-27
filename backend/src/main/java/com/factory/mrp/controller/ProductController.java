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
import org.springframework.web.bind.annotation.GetMapping;

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
        List<Product> products = repository.findAll();
        List<AnalysisDTO> analysisResult = new ArrayList<>();

        for (Product product : products) {
            List<ProductIngredient> ingredients = ingredientRepository.findByProduct(product);
            if (ingredients.isEmpty()) {
                analysisResult.add(new AnalysisDTO(product.getName(), BigDecimal.ZERO));
                continue;
            }

            BigDecimal maxPossible = null;

            for (ProductIngredient ingredient : ingredients) {
                BigDecimal currentStock = ingredient.getRawMaterial().getStockQuantity();
                BigDecimal usagePerProduct = new BigDecimal("1");
                BigDecimal possibleUnits = currentStock.divide(usagePerProduct, 0, RoundingMode.FLOOR);
                if (maxPossible == null || possibleUnits.compareTo(maxPossible) < 0) {
                    maxPossible = possibleUnits;
                }
            }
            analysisResult.add(new AnalysisDTO(product.getName(), maxPossible));
        }
        return analysisResult;
    }
}
