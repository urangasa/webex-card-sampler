/**
 * Adaptive Card Input Form Sample from https://adaptivecards.io/samples/FlightUpdate.html
 * This sample demonstrates the following types of controls
 *   -- Image
 *   -- Text Blocks with many attributes including size, weight, color, wrap, spacing and horizontalAlignment
 *
 * The speak attribute from original sample was removed as this is not supported on Webex Teams
 * 
 * A data object was added to the Action.Submit type so our app can tell which card generated 
 * the attachmentAction, and also to detect which button the user chose
 **/

class FlightUpdate {
  constructor(srcBaseUrl, contentType) {
    this.card = {
      "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
      "type": "AdaptiveCard",
      "version": "1.0",
      //"speak": "Flight KL0605 to San Fransisco has been delayed.It will not leave until 10:10 AM.",
      "body": [
        {
          "type": "ColumnSet",
          "columns": [
            {
              "type": "Column",
              "width": "auto",
              "items": [
                {
                  "type": "Image",
                  "size": "small",
                  "url": "http://adaptivecards.io/content/airplane.png"
                }
              ]
            },
            {
              "type": "Column",
              "width": "stretch",
              "items": [
                {
                  "type": "TextBlock",
                  "text": "Flight Status",
                  "horizontalAlignment": "right",
                  "isSubtle": true
                },
                {
                  "type": "TextBlock",
                  "text": "DELAYED",
                  "horizontalAlignment": "right",
                  "spacing": "none",
                  "size": "large",
                  "color": "attention"
                }
              ]
            }
          ]
        },
        {
          "type": "ColumnSet",
          "separator": true,
          "spacing": "medium",
          "columns": [
            {
              "type": "Column",
              "width": "stretch",
              "items": [
                {
                  "type": "TextBlock",
                  "text": "Passengers",
                  "isSubtle": true,
                  "weight": "bolder"
                },
                {
                  "type": "TextBlock",
                  "text": "Sarah Hum",
                  "spacing": "small"
                },
                {
                  "type": "TextBlock",
                  "text": "Jeremy Goldberg",
                  "spacing": "small"
                },
                {
                  "type": "TextBlock",
                  "text": "Evan Litvak",
                  "spacing": "small"
                }
              ]
            },
            {
              "type": "Column",
              "width": "auto",
              "items": [
                {
                  "type": "TextBlock",
                  "text": "Seat",
                  "horizontalAlignment": "right",
                  "isSubtle": true,
                  "weight": "bolder"
                },
                {
                  "type": "TextBlock",
                  "text": "14A",
                  "horizontalAlignment": "right",
                  "spacing": "small"
                },
                {
                  "type": "TextBlock",
                  "text": "14B",
                  "horizontalAlignment": "right",
                  "spacing": "small"
                },
                {
                  "type": "TextBlock",
                  "text": "14C",
                  "horizontalAlignment": "right",
                  "spacing": "small"
                }
              ]
            }
          ]
        },
        {
          "type": "ColumnSet",
          "spacing": "medium",
          "separator": true,
          "columns": [
            {
              "type": "Column",
              "width": 1,
              "items": [
                {
                  "type": "TextBlock",
                  "text": "Flight",
                  "isSubtle": true,
                  "weight": "bolder"
                },
                {
                  "type": "TextBlock",
                  "text": "KL0605",
                  "spacing": "small"
                }
              ]
            },
            {
              "type": "Column",
              "width": 1,
              "items": [
                {
                  "type": "TextBlock",
                  "text": "Departs",
                  "isSubtle": true,
                  "horizontalAlignment": "center",
                  "weight": "bolder"
                },
                {
                  "type": "TextBlock",
                  "text": "10:10 AM",
                  "color": "attention",
                  "weight": "bolder",
                  "horizontalAlignment": "center",
                  "spacing": "small"
                }
              ]
            },
            {
              "type": "Column",
              "width": 1,
              "items": [
                {
                  "type": "TextBlock",
                  "text": "Arrives",
                  "isSubtle": true,
                  "horizontalAlignment": "right",
                  "weight": "bolder"
                },
                {
                  "type": "TextBlock",
                  "text": "12:00 AM",
                  "color": "attention",
                  "horizontalAlignment": "right",
                  "weight": "bolder",
                  "spacing": "small"
                }
              ]
            }
          ]
        },
        {
          "type": "ColumnSet",
          "spacing": "medium",
          "separator": true,
          "columns": [
            {
              "type": "Column",
              "width": 1,
              "items": [
                {
                  "type": "TextBlock",
                  "text": "Amsterdam",
                  "isSubtle": true
                },
                {
                  "type": "TextBlock",
                  "text": "AMS",
                  "size": "extraLarge",
                  "color": "accent",
                  "spacing": "none"
                }
              ]
            },
            {
              "type": "Column",
              "width": "auto",
              "items": [
                {
                  "type": "TextBlock",
                  "text": " "
                },
                {
                  "type": "Image",
                  "url": "http://adaptivecards.io/content/airplane.png",
                  "size": "small"
                }
              ]
            },
            {
              "type": "Column",
              "width": 1,
              "items": [
                {
                  "type": "TextBlock",
                  "text": "San Francisco",
                  "isSubtle": true,
                  "horizontalAlignment": "right"
                },
                {
                  "type": "TextBlock",
                  "text": "SFO",
                  "horizontalAlignment": "right",
                  "size": "extraLarge",
                  "color": "accent",
                  "spacing": "none"
                }
              ]
            }
          ]
        }
      ]
    };
    this.contentType = contentType;
    this.srcUrl = (srcBaseUrl[srcBaseUrl.length - 1] === '/') ?
      srcBaseUrl + 'flight-update.js' :
      srcBaseUrl + '/flight-update.js';
  }

  async renderCard(bot) {
    await bot.say('The Flight Update sample demonstrates the following types of controls\n' +
      ' * Image\n' +
      '* Text Blocks with many attributes including size, weight, color, wrap, spacing and horizontalAlignment\n' +
      'Full Source Here:' + this.srcUrl);
    let message = await bot.say({
      // Fallback text for clients that don't render cards
      markdown: "If you see this your client cannot render our Flight Update example.",
      attachments: [{
        "contentType": this.contentType,
        "content": this.card
      }]
    });
    bot.say({
      text: '...Yay, extra time in Amsterdam!\n\n' +
        'There is no user input for this card. Post any message if you want to see another card.',
      parentId: message.id
    });

  };


};

module.exports = FlightUpdate;