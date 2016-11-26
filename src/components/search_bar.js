import React, {Component} from 'react'


class SearchBar extends Component {

  constructor(props){
    super(props)

    this.state = {
      term: ''
    };
  }; //END Constructor


  onSearchChange = (event) => {
    let term = event.target.value

    this.props.onVideoSearch(term);
  }

  render() {
    return (
      <div className="form-group col-md-6 col-md-offset-3">
        <input className="form-control" type="text" onChange={ this.onSearchChange }/>
      </div>
    )    
  };


}

export default SearchBar;