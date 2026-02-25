pachage com.factory.mrp.model;
//Folder address.

import jakarta.persistence.*;
//Db Tools.

import java.math.BigDecimal;
//For money and precision.
import java.time.LocalDateTime;
//To handle dates

//@Entity :Informs java that this class representsa table in Mysql.
@Entity
@Table(name = "products")
public class Product{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    privat Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private BigDecimal price;

    @Column(name ="created_at" , updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    public Long getId(){
        return id;
    }
    public void setId(Long id){
        this.id = id;
    }
    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name = name;
    }
    public BigDecimal getPrice(){
        return price;
    }
    public void setPrice(BigDecimal price ) {
        this.price = price;
    }
    public LocalDataTime getCreatedAt(){
        return createdAt;
    }
}
