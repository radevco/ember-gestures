import Ember from 'ember';

const { getOwner } = Ember;

export default {
  name: 'ember-gestures',

  initialize: function (instance) {
    getOwner(instance).lookup('service:-gestures');
  }
};
