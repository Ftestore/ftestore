import React, { Component } from 'react'
import Bottom from './Bottom';
import Header from './Header';
import {useState} from 'react'
import Footer from './Footer';

export default class Event extends Component {
    state = {
        loadin: true,
        list: [],
        search:'',
        count:0
        
    }
    async componentDidMount(){
        const url= "http://127.0.0.1:5000/event";
        const response = await fetch(url);
        const data =await response.json();
        this.setState({list: data.data, loadin: false});
        console.log(data.data)
        
    }
  
    increment=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    render() {
       
        if (this.state.loadin){
            return <div>loading</div>;
         }
         if (!this.state.list.length){
             return <div>didn get menu list</div>;
         }
        return (
            
            <div>
                <Header/>
                <div>
                <div>
            <div class="bottom-bar">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-md-3">
                        <div class="logo">
                            <a href="index.html">
                                <img src="img/logo.ico" alt="Logo"/>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-6">
                        
                        <div class="search">
                            
                            <input type="text" 
                            placeholder="Search"
                            onChange={(event)=>{
                                this.setState({search:event.target.value})
                            }}
                            />
                            <button><i class="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                    <div class="col-md-3">
                   
                        <div class="user">
                            <a href="wishlist.html" class="btn wishlist">
                                
                                <i class="fa fa-heart"></i>
                                <span>{this.state.count}</span>
                        
                            </a>
                            <a href="cart.html" class="btn cart">
                                <i class="fa fa-shopping-cart"></i>
                                <span>(0)</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
            </div>
                 <div class="featured-product product">
            <div class="container-fluid">
                <div class="section-header">
                    <h1> ???????? ????????????</h1>

                </div>
                <div class="navbar-nav mr-auto">
                                        <div class="row align-items-center product-slider product-slider-4">
                                        {this.state.list.filter((li)=>{
                                            if(this.state.search==""){
                                                return li
                                            }
                                            else if (li.name.toLowerCase().includes(this.state.search.toLocaleLowerCase()))
                                            {
                                                return li
                                            }
                                        })
                                        .map(li => (
                                        <div class="col-lg-3">
                                            <div class="product-item">
                                                <div class="product-image">
                                                <a href="product-detail.html">
                                                        <img src={li.image} alt="Buidan Image" style={{width:"200px",height:"300px"}}/>
                                                    </a>
                                                </div>
                                                <div class="tsag">
                                                    <p>{li.date}</p>
                                                </div>
                                                <div class="title">
                                                    
                                                    <p>{li.name}</p>
                                                    
                                                </div>
                                                <div class="product-sub">
                                                    <p>{li.sub}</p>
                                                    <a class="delgerengui" href="">?????????????????????? ---> </a>
                                                </div>
                                               
                                            </div>
                                        </div>
                                         ))}
                                    </div>
            <div className="ftr">
                <Footer/>
            </div>
                                     
            </div>
            </div>
        </div>
            </div>
        )
    }
}
