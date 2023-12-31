import styled from "styled-components";
import { List } from "./list.tsx";
import { Filter } from "./filter.tsx";
import { Profile } from "./profile.tsx";
import { useRobotsContext } from "../state/Robots.context.tsx";

export function Browse() {
  const { isLoading, errorMsg, robotsList, setRobotsList, selectedProfile, setSelectedProfile } = useRobotsContext();
  return (
    <Div>
      {/*<TopBar><h1>Pick a Bot</h1></TopBar>*/}
      {errorMsg ? (
        <h1 className="error-msg">{errorMsg}</h1>
      ) : isLoading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <>
          <Filter listData={robotsList} onFilter={setRobotsList} />
          <div className="content-box">
            <Profile {...selectedProfile} />
            <List listData={robotsList} selectItem={setSelectedProfile} />
          </div>
        </>
      )}
    </Div>
  );
}

const Div = styled.div`
  background: Cornsilk;
  padding: 10.5rem 1.5rem 1.5rem;
  border-radius: 0.4rem;
  box-shadow: 0 0.4rem 1.5rem DimGrey;
  position: relative;
  min-width: 60rem;
  min-height: 45rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div.content-box {
    display: flex;
  }

  h1.loading, h1.error-msg{
    font-size: 5rem;
    font-weight: normal;
    font-family: "Griffy", cursive;
    text-align: center;
    color: darkslateblue;
    margin-top: -10rem;
  }

  h1.error-msg{
    font-family: "Expletus Sans";
  }
`;

