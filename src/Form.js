import React from 'react';


export default function Form(props){

const {values, update, submit} = props;

const onChange = evt => {
    const {name, value} = evt.target;
    update(name, value);
}

const onSubmit = evt => {
    evt.preventDefault();
    submit();
}

    return(
        <div>
            <form onSubmit={onSubmit}>
                <label>Name
                    <input 
                        type='text'
                        name='name'
                        value={values.name}
                        onChange={onChange}
                        />
                </label>
                <label>Email
                    <input 
                        type='email'
                        name='email'
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                <label>Role
                    <select name='role' value={values.role} onChange={onChange}>
                        <option value=''>--Select a Role--</option>
                        <option value='Backend'>Backend</option>
                        <option value='Frontend'>Frontend</option>
                        <option value='Designer'>Designer</option>
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}