import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Form from './Form.js'

const initialValue = [{
  name: '',
  email: '',
  role: ''
}]

function App() {
  const [teamMemberList, setTeamMemberList] = useState([]);
  const [formValues, setFormValues] = useState(initialValue)

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    
    setTeamMemberList([...teamMemberList, newMember]);
  }
  

  return (
    <div className="App">
      {teamMemberList.map((member, index) => (
        <div key={index}>
          <p>{member.name}</p>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </div>)
      )}

      <Form values={formValues} update={updateForm} submit={submitForm}/>
      
    </div>
  );
}

export default App;
