import chromium from 'chrome-aws-lambda';
import { OG_IMAGE } from 'lib/constants';
import { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';

let page;
type OGShot = {
  url: string;
  title: string;
  description: string;
  image: string;
};

async function getPage() {
  const options = {
    args: chromium.args,
    executablePath: await chromium.executablePath,
    headless: true,
  };

  const browser = await puppeteer.launch(options);

  page = await browser.newPage();

  return page;
}

export async function getScreenshot(data: OGShot) {
  const isDev = process.env.NODE_ENV === 'development';
  const page = await getPage();
  await page.goto(
    isDev
      ? `http://localhost/generators/image?title=${data.title}&description=${data.description}&url=${data.url}`
      : `https://kamfeskaya.com/generators/image`,
  );

  await page.setViewport({ width: OG_IMAGE.width, height: OG_IMAGE.height });

  return await page.screenshot({ type: 'png' });
}

export default async function ogImage(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { body } = req;

  const screenshot = await getScreenshot(body);

  res.statusCode = 200;
  res.setHeader('Content-Type', `image/png`);
  res.setHeader(
    'Cache-Control',
    `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`,
  );
  res.end(screenshot);
}
