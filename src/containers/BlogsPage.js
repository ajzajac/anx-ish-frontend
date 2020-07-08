import React, { Component } from 'react'
import Blog from '../components/Blog'

export default class BlogsPage extends Component {
    render() {
        return (
            <div className='blogsPage'>
                <div>
                    <h2>Blogs Page</h2>
                </div>
                    <div>
                        <Blog></Blog>
                    </div>
            </div>
        )
    }
}
