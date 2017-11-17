import Component from '@ember/component';

export default Component.extend({

	classNames: ['activity-card'],

	activity: null,

	didReceiveAttrs() {

		this._super(...arguments);

		const activity = this.get('data');

		this.set('activity', activity);

		// Computed: School Image (Note these images were not available in  the source package)
		this.set('school_image',activity.program.image.file_path + activity.program.image.file_name);

		// Action Type
		// this.set('isProfileView',(activity.type == 2) ? true : false);
		// this.set('isUserFavorited',(activity.type == 4) ? true : false);

		// Action Type
		this.setupView();
	},

	setupView(){


		switch (this.activity.type) {

			case 2:
				this.setupProfileView()
				break;

			case 4:
				this.setupUserFavorites()
				break;

			default:
				break;

		}

	},

	setupProfileView(){

		this.set('isProfileView',true);
		this.set('actionIcon','icon-user');

	},

	setupUserFavorites(){

		this.set('isUserFavorited',true);
		this.set('actionIcon','icon-heart');

	}

});
