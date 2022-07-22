import React from 'react';
import './App.css';
import DetailsThumb from './components/DetailsThumb';

class App extends React.Component{

  state = {
    products: [
      {
        "_id": "1",
        "title": "Iphone 13 mini",
        "src": [
            "https://shop.du.ae/medias/sys_master/images/images/h38/hce/8988380594206/iPhone-13-Midnight.jpg",
          ],
        "description": "Ceramic Shield front Glass back and aluminum design",
        "content": "The iPhone 13 mini display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 5.42 inches diagonally (actual viewable area is less).",
        "price": 980,
        "count": 1
      }
    ],
    index: 0
  };

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }


  render(){
    const {products, index} = this.state;
    return(
      <div className="app">
        {
          products.map(item =>(
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>${item.price}</span>
                </div>

                <p>{item.description}</p>
                <p>{item.content}</p>

                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                <button className="cart">Add to cart</button>

              </div>
            </div>
          ))
        }
      </div>
    );
  };
}

export default App;
