import React from 'react';
import './styles/LavoriSection.css'
import Masonry from 'react-masonry-css';
import { Fade } from "react-awesome-reveal";

function LavoriSection(props) {

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className='LavoriSection'>
      <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
        {props.data.map(data => <Fade key={data.file}>
          <div className='containerLS' onClick={() => {props.onClicked(data.file)}}>
            <div className='blackLS'>
              <div className='titolo'>{data.titolo}</div>
            </div>
            <img className='image' src={data.file}></img>
          </div>
        </Fade>)}
      </Masonry>
    </div>
  );
}

export default LavoriSection;
