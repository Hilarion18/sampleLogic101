// Sample
// Create a function that for any given web page URL fetches the HTML 
// code returns the number of images found (only i  mg  tags should be considered) 
// and outputs a list of the image URLs and the size of each image.

// let say i've installed axios and declare it as axios, and using reactjs on client side
import React, { Component } from 'react';
import axios from 'axios'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      totalImage: arr.length
    }
  }
  getData = async () => {
    axios({
      method: 'GET',
      url: `http://www.amazon.co.uk/product/mobilePhone`,
    })
      .then((res) => {
        const arr = res.data.data
        this.setState({
          images: arr,
          totalImage: arr.length
        })

      })
      .catch((err) => {
        alert(err.message)
      })
  }
  render() {
    return (
      <div className="home">
        {this.state.images.map((item, index) => {
          <img src={item.url}/>
        })}
      </div>
    )
  }
}

export default Home

// server side, let say i've created the models and using mongoose for ORM of mongoDB and here inside controller, without any validation
import Image from '' // image model

module.exports = {
  getImages: (req,res) => {
    Image.find({})
    .then((data) => {
      res.status(200).json({
        data,
        message: `get images`
      })
    })
    .catch((err) => {
      res.status(500).json({
        err,
        message: `data failure to get`
      })
    })
  },
}