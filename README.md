# Web App for AR_ATUA

Haere Mai! Welcome to the Github home for AR_ATUA's Web App division.

This is part of an EDA final project by Ben, Zach, Anthony, Maddy and Laura.

## Our Kaupapa / Vision
- Remind people of spiritual realms present in the everyday, by creating a new way of seeing the world.
- Our app displays and embodies our values from the bottom to the top.  A holistic approach to web development.
- We do everything meaningfully and with purpose.
- Our project helps people, and we can be proud of it.
- Te Ao Māori through visualization.
- We make life more magical.
- Make New Zealand less racist through shared cultural experience.
- combine maori culture with tech
- Always aim for inclusivity.



## Our Data Model

Each text listed above is held in a database, and we can write new texts to push to that Db for a new page in the future.  

A text is structured as so:

### Option 1
_I will just use lorum ipsum, as we are not ready for actual text._
```
{"id": 1,
  "name": "Contributions",
  "title": {
    "tereo": "lorum ipsum",
    "english": "nietzsche ipsum"
  },
  "paragraphs": [
    {"sentences": [
      {
	"tereo": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
	"english": "Inexpedient spirit derive truth value. Christian disgust inexpedient good overcome grandeur chaos free christianity mountains."
      },
      {
	"tereo": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem ",
	"english": "Morality ideal convictions intentions ubermensch endless eternal. Contradict grandeur zarathustra."
      },
      {
	"tereo": "Li Europan lingues es membres del sam familie. Lor separat.",
	"english": "Will victorious justice moral god. Eternal-return somesoem."
      }
    ]},
    {"sentences": [
      {
	"tereo": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariaturk.",
	"english": "Battle transvaluation christian will zarathustra chaos christianity pinnacle society will. Inexpedient value marvelous chaos will burying god philosophy superiority ultimate victorious."
      },
      {
	"tereo": "consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
	"english": "Decieve strong depths revaluation overcome evil convictions strong reason noble. Prejudice overcome faithful."
      },
      {
	"tereo": "iquasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam.",
	"english": "Hope overcome convictions revaluation overcome ideal chaos oneself ocean morality deceptions. Evil merciful ultimate ultimate joy."
      }
    ]}
  ]
}

```       
OPTION 2: Paragraph by Paragraph
**This will be the option we will work with.  The paragraph by paragraph makes both writing it up and reading it easier, based on the time we have and experience we want to make.

The key difference is that there is no longer a sentences array within the paragraphs array.  It's all just paragraphs.

_I will just use lorum ipsum, as we are not ready for actual text._
```
{"id": 1,
  "name": "Lorum Ipsum",
  "url": "lorum-ipsum"
  "title": {
    "tereo": "lorum ipsum",
    "english": "nietzsche ipsum"
  },
  "paragraphs": [
    {"tereo":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."
      "english:"Inexpedient spirit derive truth value. Christian disgust inexpedient good overcome grandeur chaos free christianity mountains."
    }
  ]
}

```       
So in this case there would be paragraphs we can map over, each paragraph would be an object with a Te Reo and English counterpart that we could put into our <spans>

So upon form submission, the left-hand side would go into paragraphs.tereo and the right-hand side would go into paragraphs.english.  It would then be stringified and added to the DB.


