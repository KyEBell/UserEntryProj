import classes from './AddUser.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';
const AddUser = () => {
  return (
    <div>
      <Card className={classes.input}>
        <form>
          <label htmlFor='username'>Username</label>
          <input type='text'></input>
          <label htmlFor='age'>Age(Years)</label>
          <input type='number'></input>
          <Button type='submit'> Add User </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
