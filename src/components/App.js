import React from 'react';
import Unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import ImageList2 from './ImageList2';
import ImageList3 from './ImageList3';
import pixabay from '../api/pixabay';
import pexels from '../api/pexels';

let searchTerm;

class App extends React.Component{

    state = { images1: [], images2: [], images3: []};

    async onSearchSubmit(term,type) {
        const response = await Unsplash.get('/search/photos',{
            params: {query: term}
        });
        searchTerm = term;

        const response2 = await pixabay.get('',{
            params: {key: '21805340-cefac8e0de4a183c34b7f99bc', q: term.split(' ').join('+'),image_type: `${type}`, max_width: '1080'}
        });

        const response3 = await pexels.get('/search',{
            params: {query: term}
        });
        console.log(response3.data.photos);
        this.setState({images3: response3.data.photos})
        this.setState({images2: response2.data.hits})
        this.setState({images1: response.data.results});

    }
    
    render() {
        return (<div>
            <div style={{textAlign:'center'}}>
            <img style={{height: '50px', marginBottom: '-1rem',marginTop: '3rem'}} alt="wiki" src= "https://image.flaticon.com/icons/png/512/2972/2972113.png" />
            <h1 className="header">Image Search</h1>
            </div>
      
            <div className="ui container" style={{marginTop: '1rem'}}>
        <SearchBar onSubmit={this.onSearchSubmit.bind(this)}/>
        <div>
            <h1 style={{marginTop: '2rem'}}>{searchTerm ? `Results for ${searchTerm}` : ``}</h1>
            <ImageList imgs={this.state.images1}/>
            <ImageList2 imgs={this.state.images2}/>
            <ImageList3 imgs={this.state.images3}/>
        </div>
        </div></div>
        );
    }
}

export default App;