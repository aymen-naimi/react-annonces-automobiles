import '../styles/panier.css';

function panier({panier, totalPrice, commandeInProgress, commander, viderPanier}) {
	return (
    <div className='panier-auto'>
    <h2>Panier</h2>

    {panier.map((item, index) => (<div key={index} className='item-panier'>
      <div>{item.marque} {item.modele}</div>
      <div>{item.price.toLocaleString()} €</div>
    </div>))}


    <h3>total : { totalPrice.toLocaleString()} €</h3>
    <button onClick={() => viderPanier()} disabled={!panier.length}>Vider le panier</button>

    <button onClick={() => commander()} disabled={!panier.length || commandeInProgress}>Commander</button>
  </div>)
}

export default panier
