import React, { useState, useEffect } from "react";
import axios from "axios";


const ProductionAnalysis = () => {
    const [analysis, setAnalysis] = useState([]);

    const calculateProduction = async () => {
        try {
            const [prodRes, matRes, ingRes] = await Promise.all([
                axios.get('http://localhost:8080/api/products'),
                axios.get('http://localhost:8080/api/materials'),
                axios.get('http://localhost:8080/api/ingredients')
            ]);

            const suggestion = prodRes.data.map(product => {
                const productIngredients = ingRes.data.filter(i => i.product.id === product.id);
                let possibleQuantity = Infinity;

                productIngredients.forEach(ing => {
                    const material = matRes.data.find(m => m.id === ing.rawMaterial.id);
                    if (material) {
                        const maxForThis = Math.floor(material.stockQuantity / ing.quantityNeeded);
                        possibleQuantity = Math.min(possibleQuantity, maxForThis);
                    }
                });
                return {
                    ...product,
                    maxProduction: possibleQuantity === Infinity ? 0 : possibleQuantity,
                    totalValue: (possibleQuantity === Infinity ? 0 : possibleQuantity) * product.price
                };
            });

            setAnalysis(suggestion.sort((a, b) => b.totalValue - a.totalValue));
        } catch (error) {
            console.error('Analysis error:', error);
        }
    };
    return(
        <div className="container mt-5">
            <h2 className="text-primary mb-4">Production Insights (MRP Analysis)</h2>
            <div className="alert alert-info">
                This analysis prioritizes items with higher market value.
            </div>
            <div className="row">
                {analysis.map(item => (
                    <div className="col-md-4 mb-3" key={item.id}>
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-tetle">{item.name}</h5>
                                <p className="card-text">
                                    <strong>Max Yield:</strong> {item.maxProduction} units<br/>
                                    <strong>Estimated Revenue:</strong> R$ {item.totalValue.Fixed(2)}
                                </p>
                            </div>
                        </div>
                    </div>


                ))}
            </div>
        </div>

    );
};

export default ProductionAnalysis;