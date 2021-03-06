import Component from '@ember/component';

export default Component.extend({

	classNames: ['activity-card'],

	activity: null,

	didReceiveAttrs() {

		this._super(...arguments);

		const activity = this.get('data');

		this.set('activity', activity);

		//-----
		//
		// I know this should be a model. Just not enough time having only weekdays to complete this.
		//
		//-----

		// Computed: School Image (Note these images were not available in  the source package)
		this.set('schoolImage',activity.program.image.file_path + activity.program.image.file_name);
		this.set('profileImage',activity.target_user.user_details.image.file_path + activity.target_user.user_details.image.file_name);
		this.set('programProfileImage',activity.program.image.file_path + activity.program.image.file_name);
		this.formatDate();


		// Favs (Not enough info on the DB schema to determine this property)
		this.set('favState','unfavorite');

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

	},

	formatDate(){

		// Split the date
		var fullDate = this.activity.created_at;
		var parts = fullDate.split(" ");

		// Computed: Date Format
		let date = new Date(parts[0]);
		let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
		let month = months[date.getMonth()];
		let day   = date.getDate();
		let time  = this.formatTime(parts[1]);

		this.set('date',month+' '+ day);
		this.set('time',time);

	},

	formatTime(time) {
		var parts = time.split(':');
		var hh = parts[0];
		var m = parts[1];

  		var dd = "AM";
  		var h = hh;
  		if (h >= 12) {
    		h = hh - 12;
    		dd = "PM";
  		}
  		if (h == 0) h = 12;

  		m = m < 10 ? "0" + m : m;

  		return h + ":" + m + " " + dd;

	},

	actions: {

		favorite(){

			if(!this.isFavorite) {
				this.set('isFavorite','-active');
				this.set('favState','favorite');
			} else {
				this.set('isFavorite',null);
				this.set('favState','unfavorite');
			}

		},

		message(){

			alert("Launch a modal to compose a message");

		}
	}

});
