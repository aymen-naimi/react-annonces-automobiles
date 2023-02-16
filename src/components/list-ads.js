import '../styles/list-ads.css';
import { useState, useEffect } from "react";
import OrderService from '../services/commande';

function ListAds({cart, setcart}) {
        const [ads, setAds] = useState([]);
        const addItem = (item) => {
                setcart([...cart, item]);
        }
        useEffect(() => {
                OrderService.getAdsList()
                        .then((adsList) => {
                                setAds(adsList);
                        });
        }, []);

        return <div className='list-ads'>
                {
                        ads.map((item, index) => (
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

export default ListAds
