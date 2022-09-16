import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AddUser from '../components/AddUser';
import AllUsers from '../components/AllUsers';

const Users = () => {
  return (
    <div className="p-containr">
      <Tabs>
        <TabList>
          <Tab>All Users</Tab>
          <Tab>Add User</Tab>
        </TabList>

        <TabPanel>
          <AllUsers />
        </TabPanel>
        <TabPanel>
          <AddUser />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Users