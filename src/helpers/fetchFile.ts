import { Config } from '@/helpers/config';

interface FetchFileOptions {
  fileName: string;
  config: Config;
}

export async function fetchFile(options: FetchFileOptions): Promise<string> {
  const { fileName, config } = options;
  const cacheKey = `file:${fileName}`;

  const cachedData = localStorage.getItem(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  const response = await fetch(`${config.wb.baseURL}${fileName}`);
  const data = await response.text();

  localStorage.setItem(cacheKey, data);

  return data;
}