import React, { Component } from 'react'
import { connect } from 'react-redux'

let count = 0;

class Post extends Component {
    render() {
        console.log(`Posts render ${++count}`)
        return (
            <div>
                <h3>Posts</h3>
                <ul>
                    {
                        this.props.postsArr.map(post => (
                            <li>
                               { post.title}
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({postsArr: state.postsObj.posts})

export default connect(mapStateToProps)(Post)
