import { useEffect, useState } from "react";
import axios from "axios";

const Leaderboard = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/leaderboard")
      .then(response => setScores(response.data));
  }, []);

  return (
    <div>
      <h1>Leaderboard</h1>
      <ul>
        {scores.map((s, i) => (
          <li key={i}>{s.username} - {s.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
