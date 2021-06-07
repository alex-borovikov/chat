import React, {Fragment} from 'react';
import Aside from "./Aside/Aside";
import Messages from "./Messages/Messages";
import Navbar from "./Navbar/Navbar";

const Chat = () => {
    return (
       <Fragment>
           <Navbar />
           <Aside />
           <Messages />
       </Fragment>
    );
};

export default Chat;