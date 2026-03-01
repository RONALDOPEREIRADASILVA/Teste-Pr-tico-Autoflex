import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductionAnalysis, addProduct } from '../store/productionSlice';


const ProductManager = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [marketValue, setMarketValue] = useState(0);

    const [selectedProductId, setSelectedProductId] = useState('');
    const [selectedMaterialId, setSelectedMaterialId] = useState('');
    const [quantityNeeded, setQuantityNeeded] = useState(0);

    const dispatch = useDispatch();

    const products = useSelector((state) => state.production.analysisData || []);
    const materials = useSelector((state) => state.materials.list);


    useEffect(() => {
        dispatch(fetchProductionAnalysis());
    }, [dispatch]);

    const handleAddProduct = (e) => {
        e.preventDefault();
        dispatch(addProduct({ name, price, marketValue }));
        setName('');
        setPrice(0);
        setMarketValue(0);
    };

    const handleAddIngredient = (e) => {
        e.preventDefault();

        console.log("Assocating:", selectedProductId, selectedMaterialId, quantityNeeded);
        setSelectedMaterialId('');
        setQuantityNeeded(0);
    };

    return (
        <div className="container mt-4">
            <h3 className="text-primary mb-4 font-weight-bold">Product & BOM Management</h3>

            <div className="card shadow-sm mb-4">
                <div className="card-header bg-dark text-white">1. Add New Product</div>
                <div className="card-body">
                    <form onSubmit={handleAddProduct} className="row g-3">
                        <div className="col-md-4">
                            <label className="form-label small">Product Name</label>
                            <input type="text" className="form-control" placeholder="e.g. Paper"
                                value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label small">Production Price</label>
                            <input type="number" className="form-control"
                                value={price} onChange={(e) => setPrice(e.target.value)} required />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label small">Market Value</label>
                            <input type="number" className="form-control"
                                value={marketValue} onChange={(e) => setMarketValue(e.target.value)} required />
                        </div>
                        <div className="col-md-2 align-self-end">
                            <button type="submit" className="btn btn-primary w-100 shadow-sm">
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>


            <div className="card shadow-sm mb-4">
                <div className="card-header bg-dark text-white">2. Assign Ingredients (Recipe)</div>
                <div className="card-body bg-light">
                    <form onSubmit={handleAddIngredient} className="row g-3">

                        <div className="col-md-4">
                            <label className="form-label small">For Product</label>
                            <select className="form-control" value={selectedProductId}
                                onChange={(e) => setSelectedProductId(e.target.value)} required>
                                <option value="">Select a Product</option>
                                {products.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                            </select>
                        </div>

                        <div className="col-md-4">
                            <label className="form-label small">Use Raw Material</label>
                            <select className="form-control" value={selectedMaterialId}
                                onChange={(e) => setSelectedMaterialId(e.target.value)} required>
                                <option value="">Select a Material</option>
                                {materials.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
                            </select>
                        </div>

                        <div className="col-md-2">
                            <label className="form-label small">Qty Needed</label>
                            <input type="number" className="form-control"
                                value={quantityNeeded} onChange={(e) => setQuantityNeeded(e.target.value)} required />
                        </div>
                        <div className="col-md-2 align-self-end">
                            <button type="submit" className="btn btn-success w-100 shadow-sm">
                                Link
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-hover align-middle border">
                    <thead className="table-dark">
                        <tr>
                            <th>ID</th>
                            <th>Product Description</th>
                            <th>Cost</th>
                            <th>Market Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(p => (
                            <tr key={p.id}>
                                <td><span className="badge badge-light border text-dark">#{p.id}</span></td>
                                <td className="font-weight-bold">{p.name}</td>
                                <td>R$ {p.price}</td>
                                <td>R$ {p.marketValue}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductManager;