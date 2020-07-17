import React from 'react';

export const StringFormControl = (props) => {

  return (
    <div className="text-left">
      <label htmlFor={props.name + '-input'}>{props.caption}</label>
      <input type="text" id={props.name + '-input'} name={props.name}
        value={props.value} onChange={props.onChange} className="form-control" />
    </div>
  );
};