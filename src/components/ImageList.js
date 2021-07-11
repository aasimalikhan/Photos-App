import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard'

const ImageList = (props) => {
    const images = props.imgs.map(data => {
        return <ImageCard key={data.id} image={data}/>
    });

    return (
        <div className="ui segment">
            <h1>Unsplash</h1>
            <div className="image-list">{images}</div>
    </div>);
}

export default ImageList