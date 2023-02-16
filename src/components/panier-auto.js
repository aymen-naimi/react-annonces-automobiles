import { useState, useEffect } from 'react';
import '../styles/body-auto.css'
import ListAnnonce from './list-annonce';
import Panier from './panier';
import CommandeService from './../services/commande';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      .then(() => {
        setCommandeInProgress(true);
        toast.success("Commande Envoyée");
      }).catch(() => {
        toast.warn("Commande non Envoyée !");
      });
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
      <ToastContainer />
    </div>
  </div>
}

export default BodyAuto
