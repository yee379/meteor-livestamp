var Template = Package.templating.Template;

Template.registerHelper('livestamp', function(date) {
  var timestamp;
  var timestring;

  if (_.isDate(date)){
    timestamp = date.toISOString();
  } else if (_.isNumber(date)){
    timestamp = new Date(0);
    timestamp.setUTCSeconds(date);
  } else if (_.isString(date)){
    timestamp = date;
  } else {
    timestamp = new Date().toISOString();
  }
  
  timestring =  moment(timestamp).fromNow();
  
  return new Spacebars.SafeString('<span class="livestamp" data-livestamp="'+ timestamp  +'">'+timestring+'</span>');
});
