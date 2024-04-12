import {useState, useEffect} from "react";
import Container from "./components/Container/Container";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notifications/Notifications";
import Options from "./components/Options/Options";
import {FEEDBACK_KEY} from "./consts";
import {
  addToLS,
  getFromLS,
  getPositiveFeedback,
  getTotalFeedback,
} from "./helpers";

const defaultValue = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedback, setFeedback] = useState(
    getFromLS(FEEDBACK_KEY) ?? defaultValue
  );

  useEffect(() => {
    addToLS(FEEDBACK_KEY, feedback);
  }, [feedback]);

  const updateFeedback = (feedbackType) =>
    setFeedback({...feedback, [feedbackType]: feedback[feedbackType] + 1});

  const handleResetFeedback = () => setFeedback(defaultValue);

  const totalFeedback = getTotalFeedback(feedback);
  const positiveFeedback = getPositiveFeedback(feedback, totalFeedback);

  return (
    <Container>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        handleResetFeedback={handleResetFeedback}
        total={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </Container>
  );
}

export default App;
