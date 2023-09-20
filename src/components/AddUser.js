import classes from './AddUser.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';
import { useState } from 'react';
const AddUser = (props) => {
  const [user, setUser] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

  const handleAddUser = (e) => {
    e.preventDefault();
    if (user.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age',
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age greater than 0',
      });
      return;
    }

    props.onAddUser(user, age);
    setUser('');
    setAge('');
  };
  const userNameChangeHandler = (e) => {
    setUser(e.target.value);
  };
  const userAgeChangeHandler = (e) => {
    setAge(e.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      <Card className={classes.input}>
        <form onSubmit={handleAddUser}>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            value={user}
            onChange={userNameChangeHandler}></input>
          <label htmlFor='age'>Age(Years)</label>
          <input
            type='number'
            id='age'
            value={age}
            onChange={userAgeChangeHandler}></input>
          <Button type='submit'> Add User </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
