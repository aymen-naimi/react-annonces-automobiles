import '../styles/list-annonce.css';
import { useState, useEffect } from "react";

function ListAnnonce({panier, setpanier}) {
        const [annonces, setAnnonces] = useState([]);
        const addItem = (item) => {
                setpanier([...panier, item]);
        }
        useEffect(() => {
                fetch('products/products.json')
                        .then(res => res.json())
                        .then((response) => {
                                setAnnonces(response);
                        });
        }, []);

        return <div className='list-annonce'>
                {
                        annonces.map((item, index) => (
                                <div className='item' key={index}>
                                        <img className='img-auto' src={item.url} alt={item.url} />
                                        <div className="description">
                                                <table>
                                                        <tbody>
                                                                <tr>
                                                                        <td className='td-text'>Marque :</td>
                                                                        <td className='td-value'>{item.marque}</td>
                                                                </tr>
                                                                <tr>
                                                                        <td className='td-text'>Modele :</td>
                                                                        <td className='td-value'>{item.modele}</td>
                                                                </tr>
                                                                <tr>
                                                                        <td className='td-text'>Prix :</td>
                                                                        <td className='td-value'>{item.price.toLocaleString()} €</td>
                                                                </tr>
                                                                <tr>
                                                                        <td className='td-text'>Date d'immatriculation :</td>
                                                                        <td className='td-value'>{item.immatriculation}</td>
                                                                </tr>

                                                                <tr>
                                                                        <td className='td-text'>Carburant :</td>
                                                                        <td className='td-value'>{item.carburant}</td>
                                                                </tr>
                                                        </tbody>
                                                </table>

                                                <button onClick={() => addItem(item)}>Ajouter au panier</button>
                                        </div>
                                </div>
                        ))
                }
        </div>
}

export default ListAnnonce
