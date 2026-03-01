import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductionAnalysis } from "../store/productionSlice";

const ProductionAnalysis = () => {
    const dispatch = useDispatch();
    const { analysisData, loading, error } = useSelector((state) => state.production);

    useEffect(() => {
        // Busca os dados assim que a página carrega
        dispatch(fetchProductionAnalysis());
    }, [dispatch]);

    if (loading) return <div className="text-center mt-5">Loading factory data...</div>;
    if (error) return <div className="alert alert-danger">{error}</div>;

    return (
        <div className="container mt-4">
            <h3 className="text-primary mb-3">Suggested Production (MRP)</h3>

            {/* Explicação simples para o usuário final */}
            <p className="text-muted mb-4">
                This list shows how many units we can make based on current stock.
                Higher value products appear first.
            </p>

            <div className="row">
                {analysisData.map((item, index) => (
                    <div className="col-md-6 col-lg-4 mb-4" key={index}>
                        <div className="card shadow-sm h-100">
                            <div className="card-header bg-white font-weight-bold">
                                {item.productName}
                            </div>
                            <div className="card-body">
                                <h2 className="text-center mb-0">{item.possibleUnits}</h2>
                                <p className="text-center text-muted small">available units</p>
                                <hr />
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="small text-muted">Total Potential:</span>
                                    <span className="badge badge-success px-3 py-2">
                                        R$ {((item.totalValue || 0)).toFixed(2)}
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