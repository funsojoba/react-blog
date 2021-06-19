import React, { Component } from 'react'
import Logo from './logo'
import Links from './links'
import SearchBox from './search'

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
                <SearchBox
                    placeholder="Search blog" 
                    handleChange={this.props.handleChange}/>
                <div className="links" >
                    <Links links={this.state.links}/>
                </div>
            </div>
        )
    }
}



export default Navbar
