package com.factory.mrp.model;
//Folder path

import jakarta.persistence.*;
import java.math.BigDecimal;

//Turns this class into a MYSQL table.
@Entity
@Table(name ="raw_materials")
public class RawMaterial{
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;
@Column(nullable = false)
private String name; 

//the stock quantity.
@Column(name = "stock_quantity", nullable = false)
private BigDecimal stockQuantity = BigDecimal.ZERO;

//For java to acess data.
public long getId(){
return id;
}
public void setId(long id){
this.id = id;
}

public String getName(){
return name;
}
public void setName(String name){
this.name = name;
}

public BigDecimal getStockQantity(){
return stockQuantity;
}
public void setStockQuantity(BigDecimal stockQuantity){
this.stockQuantity= stockQuantity;
}
}