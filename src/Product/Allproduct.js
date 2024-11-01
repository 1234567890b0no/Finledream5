import React, { Component } from 'react'
import Header from '../Header'
import Trendingprop from './Trendingprop'
import Pageprop from './Pageprop'
import axios from 'axios'
import { NavLink } from 'react-router-dom'


class Allproduct extends Component {
  state = {
    persons: [],
  };
  componentDidMount() {
    axios.get("/assets/js/Api.json")
      .then((item) => {
        this.setState(
          {
            persons: item.data,

          }
        );
      });
  }
 
  render() {
    return (
      <div>
        <Header />
        <Pageprop />
        <Trendingprop />
        <div className='section trending'>
          <div className='container'>
            <div className='row trending-box'>
              {this.state.persons.map((element) =>

                // <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv rac">
                //   <div className="item">
                //     <div className="thumb">
                //       <NavLink to="/Ourshop"><img src={element.images[0]} alt="" /></a>
                //       <span className="price"><em>${element.price}</em>$167</span>
                //     </div>
                //     <div className="down-content">
                //       <span className="category">{element.title}</span>
                //       <h4>Assasin Creed</h4>
                //       <NavLink to="/Ourshop"><i className="fa fa-shopping-bag"></i></a>
                //     </div>
                //   </div>
                // </div>

                <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 str">
                  <div className="item">
                    <div className="thumb">
                      <NavLink to="/Ourshop"><img src="assets/images/trending-03.jpg" alt="" /></NavLink>
                      <span className="price"><em>${element.price}</em>$76</span>
                    </div>
                    <div className="down-content">
                      <span className="category">{element.title}</span>
                      <h4>
                        <ul className='mt-5 text-center'>
                          <li>

                          id:<span>{element.id}</span>
                          </li>

                          <li>

                          title:<span>{element.title}</span>
                          </li>
                          <li>

                            tags:<span>{element.tags}</span>
                          </li>

                          <li>

                            rating:<span>{element.rating}</span>
                          </li>
                          <li>

                            price:<span>{element.price}</span>
                          </li>
                        </ul></h4>
                      <NavLink to="/Ourshop">

                        {/* {element.description} */}

                        <i className="fa fa-shopping-bag">

                        </i>


                      </NavLink>
                    </div>
                  </div>
                </div>
              )}






            </div>

          </div>


        </div>







        {/* <div className='section trending'>
          <div className='container'>
            <div className='row trending-box'>
              {this.state.persons.map((element) =>
                <div className="col-lg-3 col-md-6 align-self-center mb-30 trending-items col-md-6 adv">
                  <div className="item">
                    <div className="thumb">
                      <NavLink to="/Ourshop"><img src={element.imges[0]} alt="" /></a>
                      <span className="price"><em>$36</em>$24</span>
                    </div>
                    <div className="down-content">
                      <span className="category">Action</span>
                      <h4>Assasin Creed</h4>
                      <NavLink to="/Ourshop"><i className="fa fa-shopping-bag"></i></a>
                    </div>
                  </div>
                </div>

              )}
            </div>
          </div>
        </div> */}

      </div>
    );
  }
}

export default Allproduct
