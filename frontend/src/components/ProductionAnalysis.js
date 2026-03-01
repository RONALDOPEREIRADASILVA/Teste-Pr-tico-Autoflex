import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductionAnalysis } from "../store/productionSlice";

const ProductionAnalysis = () => {
    const dispatch = useDispatch();

    const { analysisData, loading } = useSelector((state) => state.production);

    useEffect(() => {
        dispatch(fetchProductionAnalysis());
    }, [dispatch]);

    return (
        <div className="container mt-5">
            <h2 className="text-primary mb-4 font-weight-bold">Production Analysis (MRP)</h2>
            
            <div className="alert alert-warning shadow-sm">
                <i className="bi bi-exclamation-triangle-fill me-2"></i>
                <strong>Optimization Note:</strong> Items are prioritized by Market Value to maximize revenue.
            </div>

            <div className="row">
                {analysisData.map((item, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className={`card h-100 shadow-sm ${item.possibleUnits === 0 ? 'border-danger' : 'border-success'}`}>
                            <div className="card-header bg-transparent font-weight-bold text-uppercase">
                                {item.productName}
                            </div>
                            <div className="card-body">
                                <h4 className="text-center display-4">
                                    {item.possibleUnits}
                                </h4>
                                <p className="text-center text-muted">Units Possible</p>
                                <hr/>
                                <div className="d-flex justify-content-between">
                                    <span>Potential Revenue:</span>
                                    <span className="font-weight-bold text-success">
                                        R$ {item.totalValue.toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductionAnalysis;