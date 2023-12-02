import React from 'react';

interface Props {
  title: string;
}
const Title: React.FC<Props> = ({title}) => {
  return (
    <div className="mb-5 text-center">
      <h1 className="font-bold text-2xl text-orange-500 border-b pb-5 mb-10">
        {title}
      </h1>
    </div>
  );
};

export default Title;