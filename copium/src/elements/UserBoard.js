import UserInfoPanel from "./UserInfoPanel";
import UserOptionPanel from "./UserOptionPanel";
function UserBoard() {
    return ( 
        <div id="userboard">
         <UserInfoPanel/>
         <div className="line"></div>
         <UserOptionPanel/>
        </div>
      
     );
}

export default UserBoard;