import React, { useEffect, useState } from 'react';
import './styles/LavoriSection.css'
import Masonry from 'react-masonry-css';
import { Fade } from "react-awesome-reveal";
import { Skeleton } from '@chakra-ui/react';

function LavoriSection(props) {

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  console.log('All images loaded!');
  const [loadedImagesCount, setLoadedImagesCount] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const totalImages = props.data.length;

  useEffect(() => {
    if (loadedImagesCount === totalImages) {
      setLoaded(true)
      // Esegui altre azioni quando tutte le immagini sono caricate
    }
  }, [loadedImagesCount, totalImages]);

  const handleImageLoad = () => {
    console.log('okkk')
    setLoadedImagesCount((prevCount) => prevCount + 1);
  };

  return (
    <div className='LavoriSection'>
      <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
        {props.data.map(data => <Fade key={data.file}>
          <Skeleton isLoaded={loaded}>
            <div className='containerLS' onClick={() => {props.onClicked(data.file)}}>
              <div className='blackLS'>
                <div className='titolo'>{data.titolo}</div>
              </div>
              <img className='image' src={data.file} onLoad={handleImageLoad}></img>
            </div>
          </Skeleton>
        </Fade>)}
      </Masonry>
    </div>
  );
}

export default LavoriSection;
