import Ember from 'ember';

const { getOwner } = Ember;

export default {
  name: 'ember-gestures',

  initialize: function (instance) {
    if (typeof(instance.lookup) === "function") {
      instance.lookup('service:-gestures');
    } else {
      // This can be removed when we no-longer support ember 1.12 and 1.13
      getOwner(instance).lookup('service:-gestures');
    }
  }
};
