import Ember from 'ember';

export default Ember.ArrayController.extend({
	init: function() {
		this.set('post', Ember.Object.create());
	},
	sortProperties: ['timestamp'],
	sortAscending: false,
	actions: {
		publishPost: function(){
			var newPost = this.store.createRecord('post',{
				title: this.get('post.title'),
				body: this.get('post.body'),
				timestamp: new Date()
			});
			newPost.save();
		}
	}
});