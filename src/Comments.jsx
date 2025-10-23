import './Comments.css';
import { useState } from 'react';
import Comment from './showcomment';

export default function CommentForm({ addNewComment }) {
  const [formData, setFormData] = useState({
    userName: "",
    Remarks: "",
    Ratings: 5
  });

  const [errors, setErrors] = useState({});

  const handleChangeInput = (event) => {
    setFormData((currData) => ({
      ...currData,
      [event.target.name]: event.target.value
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.userName.trim()) {
      newErrors.userName = "Username is required";
    } else if (formData.userName.trim().length < 3) {
      newErrors.userName = "Username must be at least 3 characters";
    }

    if (!formData.Remarks.trim()) {
      newErrors.Remarks = "Remarks are required";
    } else if (formData.Remarks.trim().length < 10) {
      newErrors.Remarks = "Remarks must be at least 10 characters";
    }

    if (formData.Ratings < 1 || formData.Ratings > 5) {
      newErrors.Ratings = "Rating must be between 1 and 5";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) return; // Stop submission if validation fails

    console.log("Form submitted:", formData);
    addNewComment(formData);

    setFormData({
      userName: "",
      Remarks: "",
      Ratings: 5
    });

    setErrors({});
  };

  return (
    <div className="Form">
      <h3>Comments Form</h3>

      <form className="commentForm" onSubmit={handleSubmit}>
        {/* Username */}
        <label htmlFor="userName">User Name:</label>
        <input
          type="text"
          placeholder="Enter your username"
          value={formData.userName}
          id="userName"
          name="userName"
          onChange={handleChangeInput}
        />
        {errors.userName && <p className="error">{errors.userName}</p>}

        <br /><br />

        {/* Remarks */}
        <label htmlFor="Remarks">Your Remarks:</label>
        <textarea
          id="Remarks"
          name="Remarks"
          value={formData.Remarks}
          onChange={handleChangeInput}
          placeholder="Enter your comment here"
        />
        {errors.Remarks && <p className="error">{errors.Remarks}</p>}

        <br /><br />

        {/* Ratings */}
        <label htmlFor="Ratings">Rating (1–5):</label>
        <input
          id="Ratings"
          name="Ratings"
          type="number"
          min={1}
          max={5}
          value={formData.Ratings}
          onChange={handleChangeInput}
          placeholder="Enter number"
        />
        {errors.Ratings && <p className="error">{errors.Ratings}</p>}

        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
