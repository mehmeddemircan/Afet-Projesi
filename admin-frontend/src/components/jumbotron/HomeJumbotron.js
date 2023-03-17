import React, { Fragment } from "react";

const HomeJumbotron = () => {
  return (
    <Fragment>
      <div
        class="p-5 my-4 bg-light rounded-3 "
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/11699782/pexels-photo-11699782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div class="container-fluid py-5 ">
          <h1 class="display-5 fw-bold">Custom jumbotron</h1>
          <p class="col-md-8 fs-4 text-white">
            Using a series of utilities, you can create this jumbotron, just
            like the one in previous versions of Bootstrap. Check out the
            examples below for how you can remix and restyle it to your liking.
          </p>
          <button class="btn btn-primary btn-lg" type="button">
            Example button
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeJumbotron;
