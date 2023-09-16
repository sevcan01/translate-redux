import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { getUsers } from "../redux/actions/userActions";

const UserPage = () => {
  const dispatch = useDispatch();
  const state= useSelector((store)=>store)
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return (
<div>
    {state.isLoading? (
        <div>Loading...</div>
    ):( !state.isError && (<p>
        {state.users.map((user)=>(
            <p key={user.id}>{user.name}</p>
        ))}
    </p>))}
</div>
  )
};

export default UserPage;
