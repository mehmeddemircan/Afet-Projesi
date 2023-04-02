import { DatePicker, Space } from "antd";
import React, { Fragment } from "react";

const SearchTask = ({ text, setText, handleDateChange, dueDate }) => {
  return (
    <Fragment>
      <h5 className="my-4">Search Task </h5>
      <div
        className="d-flex justify-content-between my-3 align-items-center rounded-pill"
        style={{
          background: "rgb(221,221,221)",
          height: "60px",
        }}
      >
        <input
          className="form-control rounded-pill"
          style={{
            border: "none",
            backgroundColor: "transparent",
            marginRight: "10px",
            flex: 1,
          }}
          placeholder="Task Name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div
          className="form-control"
          style={{
            border: "none",
            backgroundColor: "transparent",
            marginRight: "10px",
            flex: 1,
          }}
        >
          <DatePicker
            style={{
              fontSize: "24px",
              width: "100%",
              border: "none",
              background: "transparent",
            }}
            onChange={handleDateChange}
          />
        </div>

        <input
          className="form-control"
          style={{
            border: "none",
            backgroundColor: "transparent",
            marginRight: "10px",
            flex: 1,
          }}
          placeholder="location"
        />
      </div>
    </Fragment>
  );
};

export default SearchTask;
