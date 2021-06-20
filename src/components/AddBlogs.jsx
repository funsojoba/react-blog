import React, { Component } from 'react'
import Input from './form/input'
import Textarea from './form/textarea'
import Buuton from './form/button'

class AddBlogs extends Component {
    render() {
        return (
            <div>
                <Input type="text" placeholder="input something" onChange={this.props.handleInputChange}></Input>
                <Textarea placeholder="text area something" onChange={this.props.handleTextAreaChange}/>
                <Buuton type="submit" onClick={this.props.handleClick}>Add</Buuton>
            </div>
        )
    }
}

export default AddBlogs
