import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateInvestigationInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      inspector_name: '',
      investigation_description: '',
      investigation_date: '',
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8086/api/investigations/'+this.props.match.params.id)
      .then(res => {
        this.setState({
          title: res.data.title,
          inspector_name: res.data.inspector_name,
          investigation_description: res.data.investigation_description,
          investigation_date: res.data.investigation_date
        })
      })
      .catch(err => {
        console.log("Error from UpdateInvestigationInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      inspector_name: this.state.inspector_name,
      investigation_description: this.state.investigation_description,
      investigation_date: this.state.investigation_date,
    };

    axios
      .put('http://localhost:8086/api/investigations/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-case/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateInvestigationInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateInvestigationInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Investigation List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Investigation</h1>
              <p className="lead text-center">
                  Update Investigation Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="title">Title</label>
              <input
                type='text'
                placeholder='Title of the Investigation'
                name='title'
                className='form-control'
                value={this.state.title}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="inspector">Inspector</label>
              <input
                type='text'
                placeholder='Inspector'
                name='inspector_name'
                className='form-control'
                value={this.state.inspector_name}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="description">Description</label>
              <input
                type='text'
                placeholder='Describe this investigation'
                name='investigation_description'
                className='form-control'
                value={this.state.investigation_description}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="published_date">Date</label>
              <input
                type='date'
                placeholder='investigation_date'
                name='investigation_date'
                className='form-control'
                value={this.state.investigation_date}
                onChange={this.onChange}
              />
            </div>
            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Investigation</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateInvestigationInfo;