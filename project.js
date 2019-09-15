// ------------------------------------------------------------------
// JOVO PROJECT CONFIGURATION
// ------------------------------------------------------------------

module.exports = {
    alexaSkill: {
       nlu: 'alexa',
    },
    googleAction: {
       nlu: 'dialogflow',
    },
    endpoint: 'arn:aws:lambda:us-west-2:982879137855:function:zorielleBirthday',
    // endpoint: '${JOVO_WEBHOOK_URL}',
};
