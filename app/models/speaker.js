import DS from 'ember-data';
const { attr, hasMany } = DS;

export default DS.Model.extend({
  name: attr('string'),
  twitter: attr('string'),
  photoURL: attr('string'),
  bioHTML: attr('string'),
  bioText: attr('string'),
  tags: hasMany(),
  sessions: hasMany()
});