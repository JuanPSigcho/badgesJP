import React from 'react';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import NavBar from '../components/Navbar';
import header from '../images/badge-header.svg';

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
  };

  handleChange = (e) => {
    //1st form
    // const nextForm = this.state.form;
    // nextForm[e.target.name] = e.target.value;
    this.setState({
      form: {
        //2nd form
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
      // form: nextForm, //1st form
    });
  };
  render() {
    return (
      <div>
        <NavBar />
        <div className='BadgeNew__hero'>
          <img className='img-fluid' src={header} alt='logo' />
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col'>
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                jobTitle={this.state.form.jobTitle}
                twitter={this.state.form.twitter}
                email={this.state.form.email}
                meeting='#platziconf '
                avatar='https://en.gravatar.com/userimage/204987661/4e576be8d27b3e7c2726d57ca964ff59.png'
              />
            </div>
            <div className='col-6'></div>
            <BadgeForm
              onChange={this.handleChange}
              formValues={this.state.form}
            >
              {' '}
            </BadgeForm>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
