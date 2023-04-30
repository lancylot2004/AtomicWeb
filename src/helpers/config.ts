import defaultConfig from "@/../public/config.json";
import https from 'https';

export interface Config {
  appName: string;
  appDesc: string;
  wb: {
    defaultFileName: string;
    defaultLoc: string[];
    baseURL: string;
  };
  et: {
    branch: string;
    charset: string;
    mode: string;
    options: string;
    minT: number;
    maxT: number;
    regexes: string[];
  };
  sections: {
    title: string;
    abbr: string;
    children: {
      title: string;
      abbr: string;
    }[];
  }[];
}

let config: Config = defaultConfig;

export async function fetchConfig() {
    try {
      const res = await fetch('/config.json');
      const fetchedConfig: Config = await res.json();
  
      // If the config object is empty, use the default config instead
      if (!Object.keys(fetchedConfig).length) {
        config = defaultConfig;
      } else {
        config = fetchedConfig;
      }
    } catch (error) {
      console.error(error);
      config = defaultConfig;
    }
  }
  
  export function getConfig() {
    return config;
  }
