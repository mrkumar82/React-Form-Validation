import React from "react";

function ReactFormikForm() {
  const handleSubmit = () => {};
  return (
    <div>
      <div className="container">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <h3 className="register-heading">Registration Form with Formik</h3>
          <form onSubmit={handleSubmit}>
            <div className="row register-form">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name *"
                    name="firstName"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name *"
                    name="lastName"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password *"
                    name="password"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password *"
                    name="cpassword"
                  />
                </div>
                <div className="form-group">
                  <div className="maxl">
                    <label className="radio inline">
                      <input type="radio" name="gender" value="male" />
                      <span> Male </span>
                    </label>
                    <label className="radio inline">
                      <input type="radio" name="gender" value="female" />
                      <span>Female </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email *"
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="txtEmpPhone"
                    className="form-control"
                    placeholder="Your Phone *"
                    name="phone"
                  />
                </div>

                <input type="submit" className="btnRegister" value="Register" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReactFormikForm;
