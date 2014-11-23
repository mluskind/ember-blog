import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('about');  
  this.resource('posts', function() {
    this.route('new');
  });
  this.resource('post', { path: 'posts/:id' }, function(){
  	this.route('edit');
  });
});

export default Router;
