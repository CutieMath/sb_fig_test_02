import React from "react";
import Todo from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "components/Todo",
  component: Todo,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const defaultState = (args) => <Todo {...args} />;
defaultState.args = {
  todo: {
    id: 1,
    text: "Test item",
  },
  index: 0,
  handleDeleteTodo: () => {},
};
