import React from "react";

class SearchBar extends React.Component {
    // componentDidMount(){
    //     console.log(this.props.onSubmit(this.state.textEntered,this.state.type))
    // }

    state = {textEntered: '',data:'',type:''}

    onFormSubmit(event)
    {
        event.preventDefault();
        console.log(event.target.querySelector('select').value)
        this.setState({type: event.target.querySelector('select').value})
        // event.target.
        this.props.onSubmit(this.state.textEntered,this.state.type)
    }

    onInputChange(e)
    {
        this.setState({textEntered: e.target.value});
    }
    
    render() {
        return (
        <div>
            <form onSubmit={this.onFormSubmit.bind(this)} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input type='text' onChange={this.onInputChange.bind(this)}/>
                    <select style={{marginTop: '1rem'}} class="ui dropdown">
                    <option value="all">all</option>
                    <option value="photo">Photo</option>
                    <option value="illustration">Illustration</option>
                    <option value="vector">Vector</option>
                    </select>
                    <button className="ui primary button" style={{'marginTop' : '0.5rem'}} type="submit">Search</button>
                </div>
            </form>
            
        </div> );
    }

   
}

export default SearchBar;