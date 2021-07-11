import './ImageList.css';
import React from 'react';
import ImageCard3 from './ImageCard3';

const ImageList3 = (props) => {
    // return <div>ImageList</div>
    const images = props.imgs.map(data => {
        return <ImageCard3 style={{margin: '1rem',borderRadius: '1rem'}} key={data.id} image={data} />
    });
    return (
        <div className="ui segment">
            <h1>Pexels</h1>
            <div className="image-list">{images}</div>
    </div>);
}

export default ImageList3;