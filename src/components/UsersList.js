import classes from './UsersList.module.css';
import Card from '../UI/Card';
const UsersList = (props) => {
  const listItem = props.users.map((element) => {
    return (
        <li key={element.id} className={classes.users}>
          {element.name} ({element.age} years old)
        </li>
    );
  });
  return (
    <Card className={classes.users}>
      <ul>{listItem}</ul>
    </Card>
  );
};

export default UsersList;
