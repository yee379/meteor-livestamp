var Template = Package.templating.Template;

Template.registerHelper('livestamp', function(date) {
    var timestamp;
    var timestring;

    if(_(date).isDate()){
        timestamp = date.toISOString();
    }else if(_date.isString()){
        timestamp = date;
    }else{
        timestamp = new Date().toISOString();
    }
    timestring =  moment(timestamp).fromNow();
    return new Spacebars.SafeString('<span class="livestamp" data-livestamp="'+ timestamp  +'">'+timestring+'</span>');
});
