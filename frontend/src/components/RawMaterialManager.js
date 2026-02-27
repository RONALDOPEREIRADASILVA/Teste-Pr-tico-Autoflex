import React, {useState , useEffect} from "react";
import axios from 'axios';

const RawMaterialMananger = () => {
    const [materials , setMaterials]= useState([]);
    const [formData , setFormData]=useState({name: '', stockQuantity:0});

    useEffect(() =>{
        fetchMaterials();
    } ,[]);

    const fetchMaterials = async () =>{
        const res = await axios.get('http://localhost:8080/api/materials');
        setMaterials(res.data);
    };
    const handleSubmit = async (e) =>{
        e.prevenDefault();
        await axios.post('http://localhost:8080/api/materials', formData);
        setMaterials({name:'' , stockQuantity: 0});
        fetchMaterials();
    };

    return(
        <div className="card p-4 shadow-sm">
            <h3>Raw Materials stock</h3>
            <form onSubmit={handleSubmit} className="row g-3 mb-4">
                <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Material name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value })} required />
                </div>

                <div className="col-md-4">
                    <input type="number" className="form-control" placeholder="Quantity" value={formData.stockQuantity} onChange={(e) => setFormData({...formData , stockQuantity: e.target.value})} required />
                </div>
                <div className="col-md-3">
                    <button type="submit" className="btn btn-primary w-100">Add Material</button>
                </div>
            </form>

        <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Stock</th>
                    </tr>
                </thead>
            
            <tbody>
                {
                    materials.map(m =>(
                            <tr key={m.id}>
                                <td>{m.id}</td>
                                <td>{m.name}</td>
                                <td>{m.stockQuantity}</td>
                            </tr>

                        ))
                }
            </tbody>
        </table>
        </div>
    );

};

export default RawMaterialMananger;

