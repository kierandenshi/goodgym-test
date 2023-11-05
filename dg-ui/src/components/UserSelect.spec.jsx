import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import UserSelect from "./UserSelect";

describe("UserSelect test", () => {
  const users = [
    {
      id: "123",
      first_name: "Kilgore",
      last_name: "Trout",
    },
    {
      id: "124",
      first_name: "Billy",
      last_name: "Pilgrim",
    },
  ];
  const onSelect = () => null;
  const component = render(
    <UserSelect users={users} currentUser={users[0].id} onSelect={onSelect} />,
  );

  it("should match the component snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
