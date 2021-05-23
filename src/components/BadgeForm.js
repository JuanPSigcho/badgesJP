import React from 'react';

class BadgeForm extends React.Component {
  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  //   // console.log({
  //   //   name: e.target.name,
  //   //   value: e.target.value,
  //   // });
  // };

  handleClick = (e) => {
    console.log(`Button was clicked`);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Forms was submitted`);
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className='form-control'
              type='text'
              name='firstName'
              value={this.props.formValues.firstName}
            ></input>
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className='form-control'
              type='text'
              name='lastName'
              value={this.props.formValues.lastName}
            ></input>
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className='form-control'
              type='email'
              name='email'
              value={this.props.formValues.email}
            ></input>
            <label>Job Title</label>
            <input
              onChange={this.props.onChange}
              className='form-control'
              type='text'
              name='jobTitle'
              value={this.props.formValues.jobTitle}
            ></input>
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className='form-control'
              type='text'
              name='twitter'
              value={this.props.formValues.twitter}
            ></input>
          </div>
          <button
            //type='button'
            onClick={this.handleClick}
            className='btn btn-primary'
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
