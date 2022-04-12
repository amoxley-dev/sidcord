import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import serversReducer from "./servers_reducer";
import channelsReducer from "./channels_reducer";
import messagesReducer from "./messages_reducer";
import dmServersReducer from "./dm_servers_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  servers: serversReducer,
  channels: channelsReducer,
  messages: messagesReducer,
  dmServers: dmServersReducer
});

export default entitiesReducer;