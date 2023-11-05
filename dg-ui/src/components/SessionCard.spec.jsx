import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SessionCard from "./SessionCard";

describe("UserSelect test", () => {
  const session = {
    id: "123",
    name: "Mega session",
    description: "This is a mega session",
    area: { id: "123", name: "Brighton & Hove" },
    goodgymers: [
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
    ],
  };
  const currentUser = "123";
  const joinSession = () => null;
  const leaveSession = () => null;
  const component = render(
    <SessionCard
      session={session}
      currentUser={currentUser}
      joinSession={joinSession}
      leaveSession={leaveSession}
    />,
  );

  it("should match the component snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
