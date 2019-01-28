import React, { Component , PropTypes} from 'react';

class ArticalListItem extends Component {
    render() {
        const {article} = this.props
        console.log(article);
        return (
            <div className="ArticalListItem col-md-12">
                <section className="Post">
                    <div className="banner">
                        <img src={article.fields.featureImage.fields.file.url} />
                    </div>
                    <h2><a href={article.fields.slug}>{article.fields.title}</a></h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className="author">
                        <img src={article.fields.author.fields.avatar.fields.file.url} />
                        <strong>{article.fields.author.fields.fullName}</strong>
                    </div>
                </section>
            </div>
        );
    }
}

// ArticalListItem.propTypes = {
//     article: PropTypes.object
// }

export default ArticalListItem;
