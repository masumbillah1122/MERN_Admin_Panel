import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AddProduct from '../components/AddProduct';
import AllProducts from '../components/AllProducts';

const Products = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>All Products</Tab>
        <Tab>Add Product</Tab>
      </TabList>

      <TabPanel>
        <AllProducts/>
      </TabPanel>
      <TabPanel>
        <AddProduct/>
      </TabPanel>
    </Tabs>
  );
}

export default Products
