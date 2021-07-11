import React from 'react';

class ImageCard3 extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans);
    }
    
    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/ 10);
        this.setState({spans});
    }
    render(){
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef}  alt={this.props.image.photographer} src={this.props.image.src.medium}/>
            </div>
        );
    }
}

export default ImageCard3;

