
export interface IObejctVlaue{
    name: string;
    birthdate: string;
    emailId: string;
    about: string; /** textArea */
    experience: Array<IExperience>;
    education: Array<IEducation>;
    skill: Array<ISkill>;
    language: Array<ILanguage>
    project: Array<IProject>
  }

  export interface IProject{
    name: string;
    description: string; /** textArea */
    projectRol: string;
  }

  export interface ILanguage{
    value: string;
  }

  export interface ISkill{
    value: string
  }

  export interface IExperience{
    companyName: string;
    jobPost: string;
    description: string;
    inCurrent: boolean;
    FormTo: string;
  }

  export interface IEducation{
    name: string;
    location: string;
    about: string; /** textArea */
    formTo:string;
  }