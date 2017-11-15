import Component from '@ember/component';

export default Component.extend({

	classNames: ['activities-feed'],
	
	activities: null,

	init(){
		
		this._super(...arguments);

		// Load activities
		$.getJSON('/activities').then(data=>{

			this.set("activities",data);

		});

	}

});
