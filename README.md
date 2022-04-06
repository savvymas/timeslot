# timeslot

PUBLIC URL: https://clinquant-cactus-d2962e.netlify.app/

Please see the Peek CRUD assignment completed through Level 2.

There were a few changes I would have liked to make but I was not able to get to including:
1. After saving, the slot-form should close.
2. Ember-flatpickr changes the format of the dates between creating and updating, so this should be standardized to one (more readable) format.
3. Ember-flatpickr also has some weirdness around setting default dates, which is why the dates needed a value to be pre-flled with. This should be improved to at least make it more clear to the user that these were default options (or the default should be something like "Pick a Date" which invites the user to click on the input box). 
4. Error handling, specifically for validating that all attributes for the model are inputted by the user and they have the correct type.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd timeslot`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint`
* `npm run lint:fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
