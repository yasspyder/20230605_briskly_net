import TestComponent from './TestComponent';
import '../../styles/index.scss';
import { useEffect, useState } from 'react';
import PopupComponent from './PopupComponent';

function Exercise({ questions }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [counter, setCounter] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [points, setPoints] = useState(0);
  const [repeat, setRepeat] = useState([]);

  useEffect(() => {
    if (questions) {
      setLoading(false);
      setData(questions);
    }
  }, [questions]);

  const handleRepeat = () => {
    setIsEnd(false);
    setCounter(0);
    setPoints(0);
  };

  return (
    <>
      {!loading && (
        <div className="exercise">
          <TestComponent
            data={data}
            counter={counter}
            setCounter={setCounter}
            setIsEnd={setIsEnd}
            setPoints={setPoints}
            points={points}
            setRepeat={setRepeat}
          />
          {isEnd && (
            <PopupComponent
              questions={data.length}
              points={points}
              handleRepeat={handleRepeat}
              repeat={repeat}
            />
          )}
        </div>
      )}
    </>
  );
}

export default Exercise;
