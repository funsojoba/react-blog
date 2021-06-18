import Logo from './logo'
import Links from './links'
import React, { Component } from 'react'

class Navbar extends Component {
    constructor(props){
        super(props)
        this.state={
            links:[{
                name:"home",
                url:"/"
            },{
                name:"create",
                url:"create/"
            }
        ]
        }
    }
    render() {
        return (
            <div className ="navbar">
                <Logo />
                <div className="links" >
                    <Links links={this.state.links}/>
                </div>
            </div>
        )
    }
}



export default Navbar
