import React from "react";
import SearchBar from "../pages/components/SearchBar";

export default {
  title: "SearchBar",
  component: SearchBar,
};

const Template = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});

Default.args = {};
