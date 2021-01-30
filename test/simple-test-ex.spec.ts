import {Selector} from "testcafe";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

fixture `Simple test example`            // Notice the back-tick, NOT a single or double quote
    .page `http://devexpress.github.io/testcafe/example/`     
    
    test('Check property of element', async t => {  // The async is important, calls to pages are across a network
        const developerNameInput = Selector('#developer-name');
        
        await t     // We wait on a Promise
            .expect(developerNameInput.value).eql('', 'input is empty')
            .typeText(developerNameInput, 'Peter Parker')
            .expect(developerNameInput.value).contains('Peter', 'input contains text "Peter"');

        await sleep(3000);
     });