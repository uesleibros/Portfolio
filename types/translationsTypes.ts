export default interface TranslationsType {
  alts: {
    portuguese: {
      english: string;
      portuguese: string;
    };
    english: {
      english: string;
      portuguese: string;
    };
  };
  portuguese: {
    about: {
      title: string;
      body: string;
      s1: {
        title: string;
        body: {
          text: string;
          list: Array<{
            title: string;
            body: string;
          }>;
        };
      };
      s2: {
        title: string;
        body: {
          text: string;
        };
      };
      s3: {
        title: string;
        body: {
          text: string;
        };
      };
    };
    technologies: {
      title: string;
      body: string;
      s1: {
        title: string;
        alt: string;
      };
    };
    github: string;
    projects: {
      title: string;
    };
    contacts: {
      title: string;
    };
  };
  english: {
    about: {
      title: string;
      body: string;
      s1: {
        title: string;
        body: {
          text: string;
          list: Array<{
            title: string;
            body: string;
          }>;
        };
      };
      s2: {
        title: string;
        body: {
          text: string;
        };
      };
      s3: {
        title: string;
        body: {
          text: string;
        };
      };
    };
    technologies: {
      title: string;
      body: string;
      s1: {
        title: string;
        alt: string;
      };
    };
    github: string;
    projects: {
      title: string;
    };
    contacts: {
      title: string;
    };
  };
}
