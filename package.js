Package.describe({
  name:"colllin:livestamp",
  summary: "Livestamp.js, a simple, unobtrusive jQuery plugin that provides auto-updating timeago text to your timestamped HTML elements using Moment.js, packaged for Meteor. See http://mattbradley.github.io/livestampjs/",
  version: "1.1.2",
  git: "https://github.com/colllin/meteor-livestamp.git"
});


Package.onUse(function (api, where) {
  api.versionsFrom("METEOR@0.9.0");

  api.use('mrt:moment@2.8.1', 'client');

  api.export('livestamp');

  api.addFiles('lib/livestamp/livestamp.js', 'client');
  api.addFiles('export-livestamp.js', 'client');
});
