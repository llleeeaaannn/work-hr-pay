import { useState } from 'react';
import AnimateHeight from 'react-animate-height';

const Question = ({ questionText, answerText }) => {

  const closed = 0;
  const open = 'auto';
  const [height, setHeight] = useState(closed);

  return (
    <div className="f">
      <div className="q" onClick={() => setHeight(height === closed ? open : closed)}>
        {questionText}
        <svg className={height ? "open" : ""} viewBox="0 0 32 32">
          <path d="M2 30L30 2m0 28L2 2"/>
        </svg>
      </div>

      <AnimateHeight className="a" height={height} duration={500}>
        {answerText}
      </AnimateHeight>
    </div>
  )
}

export default Question;
