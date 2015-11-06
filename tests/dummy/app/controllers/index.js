import Ember from 'ember';

export default Ember.Controller.extend({
  init(){
    let metricCard = function(){
      let component = {
        'name': 'metric-card',
        'options': {
          'number': Math.ceil(Math.random()*100),
          'string': Math.random() > 0.5 ? 'Foo bar' : 'Bar foo'
        }
      };
      return component;
    };

    let informationCard = function(){
      let component = {
        'name': 'information-card',
        'options': {
          'order': '1',
          'title': 'Some information 1',
          'info': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
      };
      return component;
    };

    let listOfComponents = [metricCard(), metricCard(), informationCard(), metricCard()];

    this.dashboard.addComponents(listOfComponents);
    // setInterval(()=>{
    //   this.dashboard.addComponent(metricCard());
    // }, 5000);
  }
});
