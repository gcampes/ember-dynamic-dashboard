export function initialize(container, application) {
   application.inject('component', 'dashboard', 'service:dynamic-dashboard');
   application.inject('controller', 'dashboard', 'service:dynamic-dashboard');
}

export default {
  name: 'dashboard',
  initialize: initialize
};
