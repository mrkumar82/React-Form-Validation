import React, { useState, useEffect } from "react";

function ReactForm() {
  const initialValues = {
    firstName: "",
    lastName: "",
    password: "",
    cpassword: "",
    email: "",
    phone: ""
  };
  const [formValue, setFormValue] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const handleBlur = (e) => {
    setFormErrors(validate(formValue));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValue));
    setIsSubmitting(true);
  };

  const validate = (value) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regxphone = /^[0-9]{8,10}$/;

    if (!value.firstName) {
      errors.firstName = "Please enter your first name";
    } else {
      errors.firstName = "";
    }

    if (!value.lastName) {
      errors.lastName = "Please enter your last name";
    } else {
      errors.lastName = "";
    }

    if (!value.password) {
      errors.password = "Please enter your password";
    } else {
      errors.password = "";
    }
    if (!value.cpassword) {
      errors.cpassword = "Please enter confirm password";
    } else if (value.cpassword !== value.password) {
      errors.cpassword = "Confirm password should be equal to password";
    } else {
      errors.cpassword = "";
    }

    if (!value.email) {
      errors.email = "Please enter your email";
    } else if (!regex.test(value.email)) {
      errors.email = "Invalid email format";
    } else {
      errors.email = "";
    }

    if (!value.phone) {
      errors.phone = "Please enter your phone";
    } else if (!regxphone.test(value.phone)) {
      errors.phone = "Please enter valid phone";
    } else {
      errors.phone = "";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submitForm();
    }
  }, [formErrors]);

  const submitForm = () => {
    console.log(formValue);
  };
  return (
    <div className="container">
      <div
        className="tab-pane fade show active"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <h3 className="register-heading">Registration Form with React</h3>
        <form onSubmit={handleSubmit}>
          <div className="row register-form">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name *"
                  value={formValue.firstName}
                  name="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {formErrors.firstName ? (
                  <span className="error">{formErrors.firstName}</span>
                ) : (
                  ""
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name *"
                  name="lastName"
                  value={formValue.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {formErrors.lastName && (
                  <span className="error">{formErrors.lastName}</span>
                )}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password *"
                  name="password"
                  value={formValue.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {formErrors.password && (
                  <span className="error">{formErrors.password}</span>
                )}
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password *"
                  name="cpassword"
                  value={formValue.cpassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {formErrors.cpassword && (
                  <span className="error">{formErrors.cpassword}</span>
                )}
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
                  value={formValue.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {formErrors.email && (
                  <span className="error">{formErrors.email}</span>
                )}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="txtEmpPhone"
                  className="form-control"
                  placeholder="Your Phone *"
                  name="phone"
                  value={formValue.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {formErrors.phone && (
                  <span className="error">{formErrors.phone}</span>
                )}
              </div>

              <input type="submit" className="btnRegister" value="Register" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReactForm;
