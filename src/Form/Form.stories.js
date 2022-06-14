import React from "react";
import Form from ".";
import "../App/App.css";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "components/Form",
  component: Form,
};

export const MainForm = (args) => <Form {...args} />;
MainForm.args = {
  inputValue: "",
  setInputValue: () => {},
  hanleSubmit: () => {},
};

export const PopulatedForm = (args) => <Form {...args} />;
PopulatedForm.args = {
  inputValue: "This is a test",
  setInputValue: () => {},
  hanleSubmit: () => {},
};
