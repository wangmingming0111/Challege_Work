import React from 'react';
import API from '../api';
import '../User.css';

const PersonContent = (props) => {
  const onSubmit = (e) => {
    alert("on submit");
  }

  return(
    <div 
      id='personal_content'
    >
      <div 
        id='personal_content_container'
      >        
        <div
          id="personal_content_header"
        >
          Notification Form
        </div>

        <div
          id="personal_content_name_group"
        >
          <div
            id="personal_content_first_name_group"
          >
            <span>
              First Name
            </span>
            <input type="text" name="firstName" className='personal_input_size'/>
          </div>
          <div
            id="personal_content_last_name_group"
          >
            <span>
              Last Name
            </span>
            <input type="text" name="lastName" className='personal_input_size'/>
          </div>
        </div>

        <div
          id="personal_content_notice_group"
        >
          <span>How would you perfer to be notified?</span>
        </div>

        <div
          id="personal_content_info_group"
        >
          <div
            id="personal_email_group"
          >
            <div
              id="personal_email_check"
            >
              <input 
                type="checkbox" 
                id="personal_email"
                name="email"
              />
              <label>
                &nbsp;&nbsp;
                Email
              </label>
            </div>
            <input type="text" name="EmailAddress" className='personal_input_size'/>
          </div>
          <div
            id="personal_phonenumber_group"
          >
            <div
              id="personal_phonenumber_check"
            >
              <input 
                type="checkbox" 
                id="personal_phonenumber"
                name="phonenumber"
              />
              <label>
                &nbsp;&nbsp;
                Phone Number
              </label>
            </div>
            <input type="text" name="phonenumber" className='personal_input_size'/>
          </div>
        </div>
        <div
          id="supervisor_group"
        >
          <label>
            Supervisor
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </label>
          <select id="supervisor_selector" placeholder='select...'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div id='submit_button_group'>
          <button 
            id='form_data_submit_button'
            onClick={onSubmit}
          >
            SUBMIT
          </button>
        </div>
      </div> 
    </div>
  )
};

export default PersonContent;