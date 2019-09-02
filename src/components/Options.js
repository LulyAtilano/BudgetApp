import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3
        className="widget-header__tittle"
      > 
        Your options 
      </h3>
      <button 
        className="button button--link"
        onClick={props.handleDeleteOptions}
      > 
        Remove All 
      </button>
    </div>
    <ul type="square" className="widget-container-list">
      { props.options.length === 0 && <p className="widget__message"> Please add an option to get started! </p>}
      { 
        props.options.map((option, index) => (
          <Option 
            key={option} 
            optionText={option} 
            count={index + 1}
            handleAddOption={props.handleAddOption}
          /> 
        ))
      }
    </ul>
  </div>
);

export default Options;
