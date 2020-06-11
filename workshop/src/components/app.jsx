import React, { Component } from 'react';

import SearchBar from './searchBar';
import Gif from './gif';
import GifList from './gifList';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGif: "Ju7l5y9osyymQ",
      gifIds: ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"]
    };
  }

  changeSelectedGif = (newGifId) => {
    this.setState({selectedGif: newGifId });
  }

   changeGifIds = (keyword) => {
    // use the keyword to fetch Giphy APi
    // Receive an array of gid ids
    // Pass this array as our new gif Ids state
    this.setState({ gifIds:  });
  }

  render() {
    // const selectedGif = "Ju7l5y9osyymQ";
    // const gifIds = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"];
    const { selectedGif, gifIds } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif gifId={selectedGif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifIds={gifIds} changeSelectedGif={this.changeSelectedGif} />
        </div>
      </div>
    );
  }
}
