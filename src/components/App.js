import { Profile } from "./Profile/Profile";
import user from "user.json";
import { Statistics } from "./Statistics/Statistics";
import data from "data.json";
import { FriendList } from "./FriendList/FriendList";
import friends from "friends.json";

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </>
  );
};
