import Masonry from 'react-masonry-css';
import sezionePittura from '../static/images/lavori/pittura/metadata'
import './styles/Lavori.css'
import LavoriSection from '../components/LavoriSection';

function Lavori() {
  function importAll(r) {
    return r.keys().map(r);
  }

  function format(images, metadata) {
    let result = []
    images.forEach(i => { 
      let [name, obj, ext] = i.split('/')[3].split('.')
      console.log('name', name)
      const fileName = name + '.' + ext
      result.push({
        name: name,
        file: i,
        titolo: metadata.hasOwnProperty(fileName) ? metadata[fileName].titolo : 'Null title',
        descrizione: metadata.hasOwnProperty(fileName) ? metadata[fileName].descrizione : 'Null descrizione'
      })
    })
    result.sort((a, b) => a.name - b.name)
    console.log('result', result)
    return result;
  }

  const immaginiSezione1 = importAll(require.context('./../static/images/lavori/pittura', false, /\.(png|jpe?g|JPG|svg|)$/));
  const sezione1Formattata = format(immaginiSezione1, sezionePittura)

  return (
    <div className='Lavori'>
      <div className='titoloSezione'>Pittura ad olio</div>
      <LavoriSection data={sezione1Formattata} onClicked={(fileNameClicked) => {console.log(fileNameClicked)}}/>
    </div>
  );
}

export default Lavori;
