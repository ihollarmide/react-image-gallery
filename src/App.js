import React from 'react';
import ImageComponent from './components/ImageComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://api.unsplash.com/photos/?client_id=e754ad4255912d206eec616b38d0e58cf57b6724f63bffbbc0ac5d602c1f93b9').then(res => res.json()).then(json => {
      this.setState({
        isLoaded: true,
        images: json,
      })
    });
  }

  render() {
    const { isLoaded, images } = this.state;
    if (!isLoaded) {
      return(
        <div>Data is loading</div>
      )
    }
    else {
      return(
          images.map((image, index) => (
            <ImageComponent url={image.urls.regular} key={index}/>)
          ))
        }
    }
}

export default App;