export interface TeamMember {
  id: number;
  name: string;
  type: string;
  weight: number;
  api_id: number;
  img_url: string;
  height: number;
}

export type ErrorJson = {
  message: string;
}