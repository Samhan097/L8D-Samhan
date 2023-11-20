import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { capitalize } from '@mui/material';

const formStyle = {
  backgroundColor: 'white',
  color: 'black', // Set text color to black
  padding: '20px',
  border: 'none',
  boxShadow: 'none',
  marginLeft: '3%',
};

const labelStyle = {
  fontSize: '14px', // Reduce font size to 14px
  color: 'gray', // Set text color to gray
  fontWeight: 'bold',
  cursor: 'pointer',
};

function MyForm() {
  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handlePlaceholderClick = (fieldName) => {
    const value = inputValue[fieldName];
    const inputField = document.getElementById(fieldName);
    if (inputField) {
      inputField.focus();
      if (value === '') {
        inputField.innerText = ''; // Clear the placeholder text
      }
    }
  };

  const handleInputChange = (fieldName, event) => {
    const newValue = event.target.innerText;
    setInputValue({ ...inputValue, [fieldName]: newValue });
  };

  return (
    <Grid container style={{ marginTop: 200 }}>
      {/* Left Side: Form */}
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Paper style={formStyle}>
          <form>
            <h2 style={{}}>We Would Love To Hear <br />About Your Next Project</h2>
            <div style={{ marginBottom: '10px' }}>
              <div>
                <label>Name</label>
              </div>
              <div
                id="name"
                style={{ ...labelStyle, borderBottom: '1px solid gray' }}
                onClick={() => handlePlaceholderClick('name')}
                onInput={(e) => handleInputChange('name', e)}
                contentEditable
              >
                {inputValue.name || 'Enter your name'}
              </div>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <div>
                <label >Email</label>
              </div>
              <div
                id="email"
                style={{ ...labelStyle, borderBottom: '1px solid gray' }}
                onClick={() => handlePlaceholderClick('email')}
                onInput={(e) => handleInputChange('email', e)}
                contentEditable
              >
                {inputValue.email || 'Enter your email'}
              </div>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <div>
                <label >Phone Number</label>
              </div>
              <div
                id="phone"
                style={{ ...labelStyle, borderBottom: '1px solid gray' }}
                onClick={() => handlePlaceholderClick('phone')}
                onInput={(e) => handleInputChange('phone', e)}
                contentEditable
              >
                {inputValue.phone || 'Enter your phone number'}
              </div>
            </div>
            <div style={{ marginBottom: '10px' }}>
              <div>
                <label >Your Message</label>
              </div>
              <div
                id="message"
                style={{ ...labelStyle, borderBottom: '1px solid gray' }}
                onClick={() => handlePlaceholderClick('message')}
                onInput={(e) => handleInputChange('message', e)}
                contentEditable
              >
                {inputValue.message || 'Enter your message'}
              </div>
            </div>
            <Button variant="contained" color="primary" fullWidth>
              Send Message
            </Button>
          </form>
        </Paper>
      </Grid>

      {/* Right Side: Image */}
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <img src="/contact/img-1.png" alt="img-1" style={{ width: '100%' }} />
      </Grid>
    </Grid>
  );
}

export default MyForm;
