export interface ICertificate {
  id: string;
  name: string;
  year: number;
}

export interface IProject {
  id?: string;
  name: string;
  year: number;
  description: string;
  frontend?: string;
  backend?: string;
  twitch?: boolean;
  technologies?: Array<string>;
}
