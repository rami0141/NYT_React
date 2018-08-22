import React from "react";

const Form = props => (
  <form className="p-5">
    <div className="form-group">
      <label htmlFor="topic">
        <strong>Topic</strong>
      </label>
      <input
        id="topic"
        type="text"
        className="form-control"
        placeholder="Politics"
        name="q"
        value={props.q}
        onChange={props.handleInputChange}
        required
      />
    </div>

    <div className="form-group">
      <label>
        <strong>Start Year</strong>
      </label>
      <input
        id="start-year"
        type="text"
        placeholder="2017"
        className="form-control"
        name="start_year"
        value={props.start_year}
        onChange={props.handleInputChange}
        required
      />
    </div>

    <div className="form-group">
      <label>
        <strong>End Year</strong>
      </label>
      <input
        id="end-year"
        type="text"
        placeholder="2018"
        className="form-control"
        name="end_year"
        value={props.end_year}
        onChange={props.handleInputChange}
        required
      />
    </div>

    <div>
      <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn btn-lg bg-info text-white float-right"
      >
      Submit
      </button>
    </div>
  </form>
);

export default Form;
