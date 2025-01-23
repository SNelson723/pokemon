import axios from "axios";
// import { TeamMember } from "../types";

export const getTeam = async (url: string) => {
  const json = await axios({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    url: url + 'my_team/team'
  });

  return json;
};