import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateInvestigation extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      inspector_name: '',
      investigation_description: '',
      investigation_date: ''
    };
  }

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
      .post('http://localhost:8086/api/investigations', data)
      .then(res => {
        this.setState({
          title: '',
          inspector_name:'',
          investigation_description:'',
          investigation_date:'',
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateInvestigation!");
      })
  };

  render() {
    return (
      <div className="CreateInvestigation">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Investigation List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Investigation</h1>
              <p className="lead text-center">
                  Create new investigation
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Title of the investigation'
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
                  <input
                    type='date'
                    placeholder='invetigation_date'
                    name='investigation_date'
                    className='form-control'
                    value={this.state.investigation_date}
                    onChange={this.onChange}
                  />
                </div>
                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateInvestigation;