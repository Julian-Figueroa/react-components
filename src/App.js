import React from 'react';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';
import faker from 'faker';

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <CommentDetail
          author='Ian'
          timeAgo='Today at 01:15PM'
          avatar={faker.image.avatar()}
          content='Nice Blog Post!'
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Eka'
          timeAgo='Today at 03:00PM'
          avatar={faker.image.avatar()}
          content='Nice Movie!'
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author='Paken'
          timeAgo='Yesterday at 10:00AM '
          avatar={faker.image.avatar()}
          content='Nice New Song!'
        />
      </ApprovalCard>
    </div>
  );
};
export default App;
