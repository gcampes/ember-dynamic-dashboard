import Ember from 'ember';

const {
  A
} = Ember;

export default Ember.Service.extend({
  components: Ember.computed.alias('sortedComponents'),

  sortProperties: ['options.order:asc'],
  sortedComponents : Ember.computed.sort('rawComponents', 'sortProperties'),

  rawComponents : A([]),

  addComponent(component){
    this.get('rawComponents').pushObject(component);
  },

  addComponents(componentList){
    for(let key in componentList){
      this.addComponent(componentList[key]);
    }
  },

  changeSortProperties(sortProperties){
    this.set('sortProperties', sortProperties);
  }

  clear(){
    this.set('rawComponents', A([]));
  }
});
