import React from "react";

const Form = () => (
  <form className="text-center mt-5 mb-5">

    <div className="form-group">
      <label htmlFor="topic" className="mr-5">
        <strong>Topic</strong>
      </label>
      <input
        id="topic"
        type="text"
        className=""
        placeholder="Politics"
        required
      />
    </div>

    <div className="form-group">
      <label className="mr-4">
        <strong>Start Year</strong>
      </label>
      <input
        id="start-year"
        type="text"
        placeholder="2017"
        required
      />
    </div>

    <div className="form-group">
      <label className="mr-4">
        <strong>End Year</strong>
      </label>
      <input
        id="end-year"
        type="text"
        placeholder="2018"
        required
      />
    </div>

    <div>
      <button
        type="submit"
        className="btn btn-md bg-info text-white"
      >
      Submit
      </button>
    </div>
  </form>
);

export default Form;
