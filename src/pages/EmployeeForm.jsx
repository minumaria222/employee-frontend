import { useState } from "react";

const initialState = {
  name: "",
  designation: "",
  location: "",
  salary: "",
};

function EmployeeForm() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [employees, setEmployees] = useState([]); // submitted entries (frontend only)

  const validate = () => {
    const newErrors = {};

    if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    if (!formData.designation.trim()) {
      newErrors.designation = "Designation is required";
    }
    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }
    if (!formData.salary || Number(formData.salary) <= 0) {
      newErrors.salary = "Salary must be greater than 0";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // clear that field's error as soon as the user starts fixing it
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setEmployees([...employees, { id: Date.now(), ...formData }]);
    setFormData(initialState);
    setErrors({});
  };

  // small helper so we don't repeat the same input markup 4 times
  const renderField = (label, name, type = "text") => (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        type={type}
        name={name}
        className={`form-control ${errors[name] ? "is-invalid" : ""}`}
        value={formData[name]}
        onChange={handleChange}
      />
      {errors[name] && <div className="invalid-feedback">{errors[name]}</div>}
    </div>
  );

  return (
    <div>
      <div className="col-md-6">
        <h2 className="mb-3">Employee Form</h2>
        <form onSubmit={handleSubmit} noValidate>
          {renderField("Name", "name")}
          {renderField("Designation", "designation")}
          {renderField("Location", "location")}
          {renderField("Salary", "salary", "number")}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      {employees.length > 0 && (
        <div className="mt-5">
          <h4>Submitted Employees</h4>
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Designation</th>
                <th>Location</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.name}</td>
                  <td>{emp.designation}</td>
                  <td>{emp.location}</td>
                  <td>{emp.salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default EmployeeForm;
