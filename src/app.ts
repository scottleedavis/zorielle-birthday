import {App} from 'jovo-framework';
import {Alexa} from 'jovo-platform-alexa';
import {JovoDebugger} from 'jovo-plugin-debugger';
import {FileDb} from 'jovo-db-filedb';
import {GoogleAssistant} from 'jovo-platform-googleassistant';

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const app = new App();

app.use(
    new Alexa(),
    new GoogleAssistant(),
    new JovoDebugger(),
    new FileDb(),
);


// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler({
    LAUNCH() {
        return this.toIntent('HappyBirthdayIntent');
    },

    HappyBirthdayIntent() {
        this.tell(`I hope you have a good unicorn birthday party Zorielle Nova.`);
    },

    'AMAZON.CancelIntent'() {
        this.tell('Ok Zori');
    },

    'AMAZON.HelpIntent'() {
        this.tell('Help Zori?');
    },
});

export {app};
