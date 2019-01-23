import Mock from 'mockjs';
import postList from './posts';

Mock
  .mock('/postList', 'get', () => {
    return {
      code: 200,
      result: postList
    }
  })