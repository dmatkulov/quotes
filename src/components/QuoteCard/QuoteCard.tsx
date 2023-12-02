import React from 'react';

const QuoteCard: React.FC = () => {
  return (
    <div>
      <h1>Title</h1>
      <div>
        <p>
          Start by making a list of the things you spend your time doing during an average day. How do you feel before you do each thing? How do you feel afterward? Take note of the things that leave you feeling energized and the places where you show up as the best version of yourself.
        </p>
        <div>
          <button>Delete</button>
          <button>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;