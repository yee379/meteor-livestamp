# Livestamp.js for Meteor

[Livestamp.js](http://mattbradley.github.io/livestampjs/), a simple, unobtrusive
jQuery plugin that provides auto-updating timeago text to your timestamped HTML
elements using [Moment.js](http://momentjs.com/), packaged for Meteor.


Installation
-------------

`meteor add copleykj:livestamp`


Usage
-------------
A template helper is included to compensate for the initial delay when using livestamp alone.

```html
<p>{{livestamp date}}</p>
```

You can also use plain html with the data-livestamp attribute as per livestamp documentation.

```html
<span data-livestamp="2013-12-24T08:14:42.345Z"></span>
```
