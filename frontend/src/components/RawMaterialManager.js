import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RawMaterialManager = () => {
    const [materials, setMaterials] = useState([]);
    const [name, setName] = useState('');
    const [stock, setStock] = useState(0);

    const loadMaterials = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/raw-materials');
            setMaterials(response.data);
        } catch (error) {
            console.error("Error loading materials:", error);
        }
    };

    useEffect(() => {
        loadMaterials();
    }, []);


    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/raw-materials', {
                name,
                stockQuantity: stock
            });
            setName('');
            setStock(0);
            loadMaterials();
            alert("Material added successfully!");
        } catch (error) {
            alert("Error adding material.");
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            try {
                await axios.delete(`http://localhost:8080/api/raw-materials/${id}`);
                loadMaterials();
            } catch (error) {
                alert("Error deleting: This material might be linked to a product.");
            }
        }
    };

    return (
        <div className="container mt-4">
            <h3 className="text-primary">Raw Material Stock (Paper Mill)</h3>
            
            <form onSubmit={handleAdd} className="mb-4 p-3 border rounded shadow-sm">
                <div className="row">
                    <div className="col-md-5">
                        <input type="text" className="form-control" placeholder="Material Name (e.g. Wood Pulp)"
                            value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="col-md-4">
                        <input type="number" className="form-control" placeholder="Initial Stock"
                        value={stock} onChange={(e) => setStock(e.target.value)} required />
                    </div>
                    <div className="col-md-3">
                        <button type="submit" className="btn btn-success w-100">Add Material</button>
                    </div>
                </div>
            </form>

            <table className="table table-hover border">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Stock Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {materials.map(mat => (
                        <tr key={mat.id}>
                            <td>{mat.id}</td>
                            <td>{mat.name}</td>
                            <td>{mat.stockQuantity} units</td>
                            <td>
                                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(mat.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RawMaterialManager;