import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	text: DS.attr('string'),
	timestamp: DS.attr('number'),
	comments: DS.hasMany('comment', { async: true })
});