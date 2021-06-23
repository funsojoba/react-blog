import React, { Component } from 'react'
import Input from './form/input'
import Textarea from './form/textarea'
import Button from './form/button'

class AddBlogs extends Component {
    render() {
        return (
            <div className="add-blog">
                <Input 
                    type="text" 
                    placeholder="Blog title " 
                    handleChange={this.props.handleInputChange}></Input>
                <Input 
                    type="text" 
                    placeholder="author" 
                    handleChange={this.props.handleInputChange}></Input>
                <Input 
                    type="text" 
                    placeholder="image url" 
                    handleChange={this.props.handleInputChange}></Input>
                <Textarea 
                    placeholder="text area something" 
                    handleChange={this.props.handleTextAreaChange}/>
                <Button type="submit" 
                    onClick={this.props.handleClick}>Add</Button>
            </div>
        )
    }
}

export default AddBlogs
