/*! Created at 07-12-2014 */
define(["jquery","underscore","backbone","soundcloud"],function(a,b,c,d){var e=c.View.extend({el:"#app",initialize:function(){this.$query=this.$("#search")},events:{"click #btn-search":"searchTracks","keyup #search":"onKeyUp"},searchTracks:function(){var a=this;d.get("/tracks",{q:this.$query.val(),license:"cc-by-sa"},function(b){var c=a.prepareTracks(b);a.collection.reset(c)})},onKeyUp:function(a){13===a.keyCode&&(this.searchTracks(),this.$("#search").blur())},prepareTracks:function(a){var b=[];return a.forEach(function(a){var c={};c.link=a.permalink_url,c.fullName=c.shortName=a.title,a.title.length>55&&(c.shortName=a.title.slice(0,55)+".."),c.src=a.stream_url+"?client_id=129995c68429621b69af9121acc1c116",b.push(c)}),b}});return e});