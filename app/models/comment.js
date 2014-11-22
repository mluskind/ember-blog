import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	text: DS.attr('string'),
	timestamp: DS.attr('number'),
	post: DS.belongsTo('post', { async: true })
});