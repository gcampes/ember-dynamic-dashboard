import Ember from 'ember';

export default Ember.Controller.extend({
  init(){
    let informationCard = function(){
      let component = {
        'name': 'information-card',
        'options': {
          'order': '5',
          'title': 'Some information 2',
          'info': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
      }
      return component;
    };

    this.dashboard.addComponent(informationCard());
  }
})
