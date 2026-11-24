import { test } from '@playwright/test'

import { generatePlaywrightSteps } from './gemini-helper.js';
import fs from 'fs'

test('gemini test',async()=>{
const task=
`1 navigate to https://www.way2automation.com/way2auto_jquery/datepicker.php
2 click on date and click 15 november
`;
const code=await generatePlaywrightSteps(task);
await fs.promises.writeFile('generated-code.ts', code, 'utf8');

})