import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string().required("Please enter first name"),
  lastName: Yup.string().required("Please enter last name"),
  password: Yup.string()
    .min(8, "Minimum 8 characters")
    .required("Please enter password"),
  cpassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Match the password"),
  email: Yup.string()
    .email("Valid email required")
    .required("Email is required"),
  phone: Yup.number()
    .min(10, "Minimum 10 characters")
    .required("Phone is required")
});

function ReactFormikForm() {
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
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              password: "",
              cpassword: "",
              email: "",
              phone: ""
            }}
            validationSchema={validationSchema}
            onSubmit={(value) => {
              console.log(value);
            }}
          >
            {({ handleSubmit, handleChange, values, errors }) => (
              <form onSubmit={handleSubmit}>
                <div className="row register-form">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name *"
                        name="firstName"
                        onChange={handleChange}
                        value={values.firstName}
                      />
                      <span className="error">{errors.firstName}</span>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name *"
                        name="lastName"
                        onChange={handleChange}
                        value={values.lastName}
                      />
                      <span className="error">{errors.lastName}</span>
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password *"
                        name="password"
                        onChange={handleChange}
                        value={values.password}
                      />
                      <span className="error">{errors.password}</span>
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password *"
                        name="cpassword"
                        onChange={handleChange}
                        value={values.cpassword}
                      />
                      <span className="error">{errors.cpassword}</span>
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
                        onChange={handleChange}
                        value={values.email}
                      />
                      <span className="error">{errors.email}</span>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="txtEmpPhone"
                        className="form-control"
                        placeholder="Your Phone *"
                        name="phone"
                        onChange={handleChange}
                        value={values.phone}
                      />
                      <span className="error">{errors.phone}</span>
                    </div>

                    <input
                      type="submit"
                      className="btnRegister"
                      value="Register"
                    />
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default ReactFormikForm;
