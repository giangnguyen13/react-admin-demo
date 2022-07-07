// in src/App.js
import * as React from "react";
import { Admin, Resource, CustomRoutes } from "react-admin";
import { Route } from "react-router-dom";
import dataProvider from "./providers/dataProvider";
import UserList from "./list_components/UserList";
import { PostList } from "./list_components/PostList";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import Dashboard from "./screens/Dashboard";
import authProvider from "./providers/authProvider";
import PostEdit from "./list_actions/PostEdit";
import PostCreate from "./list_actions/PostCreate";
import Settings from "./screens/Setting";
import MyLayout from "./layouts/Layout";
import LoginPage from "./screens/LoginPage";
import BasicTabs from "./screens/MoreTable";

// const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
    layout={MyLayout}
    loginPage={LoginPage}
  >
    <Resource
      name='posts'
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource name='users' list={UserList} icon={UserIcon} />
    <CustomRoutes>
      <Route path='/tables' element={<BasicTabs />} />
      <Route path='/profile' element={<Settings />} />
      <Route path='/logout' element={<Settings />} />
    </CustomRoutes>
  </Admin>
);

export default App;
