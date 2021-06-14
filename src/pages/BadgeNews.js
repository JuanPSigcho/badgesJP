import React from 'react';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

import header from '../images/platziconf-logo.svg';
import './styles/BadgeNew.css';
import api from '../api';

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
      avatarUrl: '',
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

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });
    try {
      await api.badges.create(this.state.form);
      console.log('state form', this.state.form);
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className='BadgeNew__hero'>
          <img
            className='BadgeNew__hero-image img-fluid'
            src={header}
            alt='logo'
          />
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <Badge
                firstName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                twitter={this.state.form.twitter || 'TWITTER'}
                email={this.state.form.email || 'EMAIL'}
                meeting='#platziconf '
                avatarUrl={
                  this.state.form.avatarUrl ||
                  'https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon'
                }
              />
            </div>
            <div className='col-6'>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
              >
                {' '}
              </BadgeForm>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
