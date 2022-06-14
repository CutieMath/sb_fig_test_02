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

export const defaultState = (args) => <Form {...args} />;
defaultState.args = {
  inputValue: "",
  setInputValue: () => {},
  hanleSubmit: () => {},
};

export const PopulatedState = (args) => <Form {...args} />;
PopulatedState.args = {
  inputValue: "This is a test",
  setInputValue: () => {},
  hanleSubmit: () => {},
};
