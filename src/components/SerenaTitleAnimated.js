import './styles/SerenaTitleAnimated.css'

function SerenaTitleAnimated(props) {
  return (
    <div className='header-title-container'>
        <svg id="anim" style={props.styl}  viewBox="0 0 500 130" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Vector 1" d="M130.5 10.5C124.833 6.33334 106.1 0.500002 76.5 10.5C39.5 23 26 34.5 45 41C64 47.5 110 60 84 79C58 98 -13 118 9 98.5C31 79 84.5 78.5 118 71C151.5 63.5 177 57.5 166 52.5C155 47.5 124.5 59.5 136 74.5C147.5 89.5 180 58 192 59C204 60 190.5 70 198 74.5C205.5 79 243 71 243.5 63.5C244 56 233.5 54.5 228.5 59C223.5 63.5 220.5 79 243.5 79C266.5 79 278 59 280 63.5C282 68 290.5 78.5 304 71C317.5 63.5 308.5 71 319.5 71C330.5 71 362 74.5 363.5 63.5C365 52.5 339.5 55.4818 340 63.5C340.5 71.5182 352 71 372.5 71C388.9 71 404 73.3333 409.5 74.5" strokeWidth="7" strokeLinecap="round"/>
        </svg>
    </div>
  );
}

export default SerenaTitleAnimated;
