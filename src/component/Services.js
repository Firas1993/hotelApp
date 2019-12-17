import React, { Component } from 'react'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa";

import Title from "./Title";
export default class Services extends Component {
  state={
      services:[
          {
              title:"Free cocktails",
              icon:<FaCocktail/>,
              info:"Lorem from borem korem and if not morem so come take lorem"
          },
          {
              title:"Free Hiking",
              icon:<FaHiking/>,
              info:"Lorem from borem korem and if not morem so come take lorem"
          },
          {
              title:"Free Shuttl Van",
              icon:<FaShuttleVan/>,
              info:"Lorem from borem korem and if not morem so come take lorem"
          },
          {
              title:"Free cocktails",
              icon:<FaBeer/>,
              info:"Lorem from borem korem and if not morem so come take lorem"
          }
      ]
  }
  render() {
    return (
     <section className="services">
           <Title title="services" />
           <div className="services-center">
            {this.state.services.map((item,index)=>{
                return <article className="service" key={index}> 
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
                </article>
            })}
           </div>
    </section>
    )
  }
}
