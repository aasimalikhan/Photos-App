import './ImageList.css';
import React from 'react';
import ImageCard2 from './ImageCard2';

const ImageList2 = (props) => {
    // return <div>ImageList</div>
    const images = props.imgs.map(data => {
        return <ImageCard2 style={{margin: '1rem',borderRadius: '1rem'}} key={data.id} image={data} />
    });
    return (
        <div className="ui segment">
            <h1>Pixabay</h1>
            <div className="image-list">{images}</div>
    </div>);
}

export default ImageList2;