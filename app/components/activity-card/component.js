import Component from '@ember/component';

export default Component.extend({

	classNames: ['activity-card'],
	
	activity: null,

	didReceiveAttrs() {
    	this._super(...arguments);
    	const activity = this.get('data');
    	if (typeof activity === 'string') {
      		this.set('activity', JSON.parse(activity));
    	} else {
      		this.set('activity', activity);
    	}
  }

});
