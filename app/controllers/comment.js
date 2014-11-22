App.CommentController = Ember.ArrayController.extend({
	sortProperties: ['timestamp'],
	sortAscending: false,
	actions: {
		publishComment: function (){
			var newComment = this.store.createRecord('comment',{
				name: this.get('comment.name'),
				text: this.get('comment.text'),
				timestamp: new Date()
			});
			newComment.save();
		}
	}
});