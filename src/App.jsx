import { useState } from "react";

const initialAnswers = {
  name: "",
  favoritePart: "",
  experience: "",
  workSetup: "",
};

export const App = () => {
  const [answers, setAnswers] = useState(initialAnswers);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers(initialAnswers);
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <main className="container">
        <div className="card summary">
          <h1>Your Results</h1>
          <p className="subtitle">Thanks for completing the survey, {answers.name || "friend"}!</p>
          <ul className="summary-list">
            <li>
              <span className="label">Name</span>
              <span className="value">{answers.name || "—"}</span>
            </li>
            <li>
              <span className="label">Favorite part of coding</span>
              <span className="value">{answers.favoritePart || "—"}</span>
            </li>
            <li>
              <span className="label">Years of experience</span>
              <span className="value">{answers.experience || "—"}</span>
            </li>
            <li>
              <span className="label">Preferred work setup</span>
              <span className="value">{answers.workSetup || "—"}</span>
            </li>
          </ul>
          <button className="btn" onClick={handleReset}>Take it again</button>
        </div>
      </main>
    );
  }

  return (
    <main className="container">
      <div className="card">
        <h1>Developer Survey</h1>
        <p className="subtitle">Answer 4 quick questions about your dev life.</p>

        <form onSubmit={handleSubmit}>
          <div className="question">
            <label htmlFor="name">What's your name?</label>
            <input
              id="name"
              type="text"
              name="name"
              value={answers.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>

          <div className="question">
            <fieldset>
              <legend>What's your favorite part of coding?</legend>
              {[
                "Solving problems",
                "Building UIs",
                "Writing tests",
                "Reviewing code",
              ].map((option) => (
                <label key={option} className="radio-label">
                  <input
                    type="radio"
                    name="favoritePart"
                    value={option}
                    checked={answers.favoritePart === option}
                    onChange={handleChange}
                    required
                  />
                  {option}
                </label>
              ))}
            </fieldset>
          </div>

          <div className="question">
            <label htmlFor="experience">How many years of experience do you have?</label>
            <select
              id="experience"
              name="experience"
              value={answers.experience}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select an option</option>
              <option value="Less than 1 year">Less than 1 year</option>
              <option value="1–2 years">1–2 years</option>
              <option value="3–5 years">3–5 years</option>
              <option value="6–10 years">6–10 years</option>
              <option value="10+ years">10+ years</option>
            </select>
          </div>

          <div className="question">
            <fieldset>
              <legend>What's your preferred work setup?</legend>
              {[
                "Fully remote",
                "Hybrid",
                "In the office",
                "Café hopping",
              ].map((option) => (
                <label key={option} className="radio-label">
                  <input
                    type="radio"
                    name="workSetup"
                    value={option}
                    checked={answers.workSetup === option}
                    onChange={handleChange}
                    required
                  />
                  {option}
                </label>
              ))}
            </fieldset>
          </div>

          <button className="btn" type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
};
