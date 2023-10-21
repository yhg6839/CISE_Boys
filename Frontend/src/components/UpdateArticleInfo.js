import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../UpdateArticleInfo.css';

class UpdateArticleInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            year_of_pub: '',
            journal_name: '',
            volume_number: '',
            doi: '',
            process_status: '',
            article_text: '',
            keywords: '',
            Analysis: ''
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3006/api/articles/' + this.props.match.params.id)
            .then(res => {
                this.setState({ //store the new data inside
                    title: res.data.title,
                    author: res.data.author,
                    year_of_pub: res.data.year_of_pub,
                    journal_name: res.data.journal_name,
                    volume_number: res.data.volume_number,
                    doi: res.data.doi,
                    process_status: res.data.process_status,
                    article_text: res.data.article_text,
                    keywords: res.data.keywords,
                    Analysis: res.data.Analysis
                  });
            })
            .catch(err => {
                console.error("Error from UpdateArticleInfo", err);
            });
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const updatedData = {
            ...this.state,
            process_status: "Live"
        };

        axios.put('http://localhost:3006/api/articles/' + this.props.match.params.id, updatedData)
            .then(() => {
                this.props.history.push('/analyst');
            })
            .catch(err => {
                console.error("Error in UpdateArticleInfo!", err);
            });
    };

    render() {
        return (
            <section className="article-update-section">
                <header>
                    <h2>Article Analysis</h2>
                    <p>Add comments and Article Text</p>
                </header>
                <form onSubmit={this.handleSubmit}>
                    <div className="question-group">
                        <label>Does the title meet the requirements?</label>
                        <input type='text' placeholder='Yes/No' name='Judge' className='form-control' value={this.state.keywords} onChange={this.onChange}/>
                    </div>

                    <div className="question-group">
                        <label>Does the author match the title?</label>
                        <input type='text' placeholder='Yes/No' name='Judge' className='form-control' value={this.state.Analysis} onChange={this.onChange}/>
                    </div>

                    <div className="question-group">
                        <label>Is the year of publication correct?</label>
                        <input type='text' placeholder='Yes/No' name='Judge' className='form-control' value={this.state.year_of_pub} onChange={this.onChange}/>
                    </div>

                    <div className="question-group">
                        <label>Does the DOI conflict with the data in the database?</label>
                        <input type='text' placeholder='Yes/No' name='Judge' className='form-control' value={this.state.doi} onChange={this.onChange}/>
                    </div>

                    <div className="question-group">
                        <label>Comments for analysis articles</label>
                        <input type='text' placeholder='Yes/No' name='Judge' className='form-control' value={this.state.article_text} onChange={this.onChange}/>
                    </div>

                    <div className="action-buttons">
                        <button type="submit" className="confirm-btn">Confirm and Save</button>
                        <Link to="/moderation" className="decline-btn">Decline</Link>
                        <Link to="/analyst" className="back-btn">Back to Analyst</Link>
                    </div>
                </form>
            </section>
        );
    }
}

export default UpdateArticleInfo;
