import { useState, useEffect } from 'react';
import '../styles/body-auto.css'
import ListAnnonce from './list-annonce';
import Panier from './panier';
import CommandeService from './../services/commande';

function BodyAuto() {

  const viderPanier = () => {
    if (commandeInProgress) {
      setCommandeInProgress(false);
    }
    setpanier([]);
  }
  const [totalPrice, setTotalPrice] = useState(0);
  const [commandeInProgress, setCommandeInProgress] = useState(false)
  const [panier, setpanier] = useState([]);

  const commander = () => {
    CommandeService.commander(panier)
      .then((res) => {
        setCommandeInProgress(true);
        console.log('commande en cours');
      }).catch((err) => {
        console.log(err);
      })
  }


  useEffect(() => {
    const totalPrice = panier.reduce((acc, item) => {
      return acc + item.price;
    }, 0);

    setTotalPrice(totalPrice)

  }, [panier]);

  return <div>
    <div className='panier-auto__container'>
      <Panier
        panier={panier}
        totalPrice={totalPrice}
        commandeInProgress={commandeInProgress}
        commander={commander}
        viderPanier={viderPanier}
      />
      <ListAnnonce
        panier={panier}
        setpanier={setpanier}
      />
    </div>
  </div>
}

export default BodyAuto
