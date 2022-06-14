import React from "react";
import TodoList from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/TodoList",
  component: TodoList,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const defaultState = (args) => <TodoList {...args} />;
