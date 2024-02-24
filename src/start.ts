import puppeteer from 'puppeteer';
import { getMap } from './mapReader';

async function runStart() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // Navigate to a webpage
    var htmlPage = await page.goto('https://www.nonograms.org/nonograms/i/35309');

    var map = getMap(htmlPage);
    // Perform automation actions
}

runStart();