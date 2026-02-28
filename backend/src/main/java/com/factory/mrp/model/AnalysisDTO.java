
package com.factory.mrp.model;

import java.math.BigDecimal;

public class AnalysisDTO {
private String productName;

private BigDecimal possibleUnits;
private BigDecimal totalValue;

public AnalysisDTO(String productName, BigDecimal possibleUnits, BigDecimal totalValue ) {
this.productName = productName;
this.totalValue = totalValue;
}

public String getProductName() {
return productName; }
public BigDecimal getPossibleQuantity() {
return possibleUnits; }

public void setProductName(String productName) {
this.productName = productName;
}

public void setPossibleQuantity(BigDecimal possibleUnits) {
this.possibleUnits = possibleUnits;
}

public BigDecimal getTotalValue() {
return totalValue;
}

public void setTotalValue(BigDecimal totalValue) {
this.totalValue = totalValue;
}
}