import React, { Component } from 'react';
import client from './service'



class SingleArtical extends Component {

    constructor(){
        super()
        this.state = {
            article:null
        }
    }

    getvalue(){
        const User = ({ match }) => {
            return <h1>Hello {match.params.username}!</h1>
          }
    }
    
    componentDidMount(){
        // const {params} = this.props
        if(SingleArtical.params && SingleArtical.params.slug){
            client.getEntries({content_type:'post','fields.slug': SingleArtical.params.slug})
            .then((response) => {
                this.setState({article: response.items[0]})
            })
        }
    }

    render() {
        console.log(this.props.params);
        console.log("user");

        if(!this.state.article){
            console.log("No data Found");
        }
        return (
            <div className="container">
                <div className="row">
                   {/* <h1>{this.props.params.slug}</h1> */}
                   <h1>Rohit</h1>
                </div>
            </div>
        );
    }
}

export default SingleArtical;


var vir = this.props.match.params.slug;