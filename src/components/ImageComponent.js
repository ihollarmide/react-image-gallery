import React from 'react';

const ImageComponent = ({key, url}) => (
    <div className="grid-image" key={key}>
        <img src={url} alt="Random Unsplash Image"/>
    </div>
)


export default ImageComponent;