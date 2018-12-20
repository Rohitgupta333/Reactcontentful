import React, { Component } from 'react';
import ArticalListItem from './ArticalListItem';
const contentful = require("contentful");

class ArticalList extends Component {

    constructor(){
        super()
        this.state = {
            articles:[]
        }
    }

    componentDidMount() {
        const client = contentful.createClient({
            space: "sfr9yqxtgjmb",
            accessToken: "0e81a87cc7d7a653a793bebcb66480234d32fd4f652dc1d9d012ba55022dd3d0"
        })

        client.getEntries({content_type: 'post'}).then((response) =>{
            this.setState({articles: response.items})
        })

    }


    render() {
        const articles = this.state.articles.map((article , i) => <ArticalListItem id={i} key={i} article={article} />)

        return (
            <div className="container">
                <div className="row">
                    {articles}
                </div>
            </div>
        );
    }
}

export default ArticalList;
