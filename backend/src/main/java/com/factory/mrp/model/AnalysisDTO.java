
package com.factory.mrp.model;

import java.math.BigDecimal;

public class AnalysisDTO {
    private String productName;
    private BigDecimal possibleQuantity;

    public AnalysisDTO(String productName, BigDecimal possibleQuantity) {
        this.productName = productName;
        this.possibleQuantity = possibleQuantity;
    }

    // Getters
    public String getProductName() { 
        return productName; }
    public BigDecimal getPossibleQuantity() { 
        return possibleQuantity; }
}