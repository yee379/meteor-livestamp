Package.describe({
  summary: "Livestamp.js, a simple, unobtrusive jQuery plugin that provides auto-updating timeago text to your timestamped HTML elements using Moment.js, packaged for Meteor. See http://mattbradley.github.io/livestampjs/"
});

Package.on_use(function (api, where) {
  if(api.export) {
    api.export('livestamp');
  }
  where = where || ['client'];
  api.add_files('lib/livestamp/livestamp.js', where);
  api.add_files('export-livestamp.js', where);
});
