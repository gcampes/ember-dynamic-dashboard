import Ember from 'ember';
import DashboardableMixin from '../mixins/dashboardable';

export default Ember.Component.extend(DashboardableMixin,{
  classNames: ['metric-card', 'card'],

  actions:{
    change(){
      this.set('number', Math.ceil(Math.random()*100)) ;
    },

    clear(){
      this.dashboard.clear();
    }
  }
});
