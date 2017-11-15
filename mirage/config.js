export default function() {


  // Mock Activities
  this.get('/activities', function (schema, request) {
    var activities = [{
        "id": 6441583,
        "type": 2,
        "ref_program_id": 5084,
        "created_at": "2017-11-08 23:37:45",
        "updated_at": null,
        "source_user": {
            "id": 25023,
            "first_name": "Beth",
            "last_name": "Bacher",
            "user_type": 2,
            "url": "beth_bacher",
            "user_details": {
                "id": 9344,
                "position": "Head",
                "active": 1
            }
        },
        "program": {
            "type": "programs",
            "id": 5084,
            "url": "fitchburg_state__w",
            "gender": "2",
            "website": "fscfalcons.com\/sports\/fh\/index",
            "division": {
                "id": 41,
                "site_id": 3,
                "name": "NCAA DIII",
                "gender": 2,
                "is_search_option": 1
            },
            "conference": {
                "id": 40,
                "name": "Little East Conference (LEC)",
                "division_id": 0,
                "active": 1
            },
            "address1": null,
            "address2": null,
            "city": "Fitchburg",
            "state": "MA",
            "zip": null,
            "phone": null,
            "active": 1,
            "created_at": "2014-03-02 16:19:29",
            "updated_at": null,
            "college": {
                "type": "colleges",
                "id": 154,
                "name": "Fitchburg State ",
                "selectivity": "Less",
                "created_at": "2013-09-14 23:07:48",
                "updated_at": "0000-00-00 00:00:00",
                "details": {
                    "city": "Fitchburg",
                    "state": "Massachusetts"
                }
            },
            "image": {
                "id": 34362,
                "file_path": "file\/images\/lacrosserecruits\/2015\/",
                "file_name": "154_fitchburg_state_.png"
            }
        },
        "target_user": {
            "id": 53769,
            "first_name": "Emma",
            "last_name": "Satterfield",
            "user_type": 1,
            "url": "emma_satterfield",
            "user_details": {
                "id": 42779,
                "jersey_number": "",
                "honors": "",
                "expires_on": "2019-10-30 04:00:00",
                "membership_level": "bronze",
                "user_player_info": {
                    "id": 34814,
                    "user_id": 53769,
                    "class_year": 2020,
                    "ncaa_number": "",
                    "highschool_id": 645,
                    "highschool_string": "James Madison High School",
                    "parent_1_first": "Blanton",
                    "parent_1_last": "Satterfield",
                    "parent_1_phone": "+551-234-567890",
                    "parent_1_email": "alex+parent@sportsrecruits.com",
                    "parent_1_college": "",
                    "parent_2_first": "Jane",
                    "parent_2_last": "Satterfield",
                    "parent_2_phone": "+551-234-567890",
                    "parent_2_email": "alex+bsatter@yahoo.com",
                    "parent_2_college": "",
                    "other_sports": "<p>soccer, jv lacrosse<\/p>",
                    "second_sport_college": 0,
                    "extracurricular": "<p>Youth group, Younglife, Spanish Honor Society, Art Honor Society, Spanish Club<\/p>",
                    "class_rank": "",
                    "class_size": "570",
                    "gpa": "4.00",
                    "gpa_unrestricted": "4.00",
                    "gpa_scale": "4.00",
                    "gpa_is_weighted": 0,
                    "act_score": "29",
                    "sat_math": "230",
                    "sat_verbal": "250",
                    "sat_writing": "0",
                    "sat_tot_math_verbal": "480",
                    "sat_tot_math_verbal_writing": "0",
                    "sat_2_sub_1": "Biology E",
                    "sat_2_sub_1_score": "0",
                    "sat_2_sub_2": "Biology E",
                    "sat_2_sub_2_score": "0",
                    "honors": "<p>NFHCA National Academic Squad Athletic honor roll 2014-2016 Academic Letter-2015<\/p>",
                    "referred_by": "",
                    "modified": "2017-10-18 22:27:11",
                    "highschool_state": "",
                    "highschool_city": ""
                },
                "sport_info": null,
                "image": {
                    "id": 84899,
                    "file_path": "images\/fieldhockeyrecruits\/2017\/9\/",
                    "file_name": "139_53769_donkey_kong.jpg"
                }
            }
        },
        "actions": {
            "program_favorite_state": 1,
            "high_five_state": 0,
            "high_five_count": 0
        },
        "details": {
            "time_of_view": "2017-11-08 23:37:45"
        }
    }, {
        "id": 6441583,
        "type": 2,
        "ref_program_id": 5084,
        "created_at": "2017-11-08 23:37:45",
        "updated_at": null,
        "source_user": {
            "id": 25023,
            "first_name": "Beth",
            "last_name": "Bacher",
            "user_type": 2,
            "url": "beth_bacher",
            "user_details": {
                "id": 9344,
                "position": "Head",
                "active": 1
            }
        },
        "program": {
            "type": "programs",
            "id": 5084,
            "url": "fitchburg_state__w",
            "gender": "2",
            "website": "fscfalcons.com\/sports\/fh\/index",
            "division": {
                "id": 41,
                "site_id": 3,
                "name": "NCAA DIII",
                "gender": 2,
                "is_search_option": 1
            },
            "conference": {
                "id": 40,
                "name": "Little East Conference (LEC)",
                "division_id": 0,
                "active": 1
            },
            "address1": null,
            "address2": null,
            "city": "Fitchburg",
            "state": "MA",
            "zip": null,
            "phone": null,
            "active": 1,
            "created_at": "2014-03-02 16:19:29",
            "updated_at": null,
            "college": {
                "type": "colleges",
                "id": 154,
                "name": "Fitchburg State ",
                "selectivity": "Less",
                "created_at": "2013-09-14 23:07:48",
                "updated_at": "0000-00-00 00:00:00",
                "details": {
                    "city": "Fitchburg",
                    "state": "Massachusetts"
                }
            },
            "image": {
                "id": 34362,
                "file_path": "file\/images\/lacrosserecruits\/2015\/",
                "file_name": "154_fitchburg_state_.png"
            }
        },
        "target_user": {
            "id": 53769,
            "first_name": "Emma",
            "last_name": "Satterfield",
            "user_type": 1,
            "url": "emma_satterfield",
            "user_details": {
                "id": 42779,
                "jersey_number": "",
                "honors": "",
                "expires_on": "2019-10-30 04:00:00",
                "membership_level": "bronze",
                "user_player_info": {
                    "id": 34814,
                    "user_id": 53769,
                    "class_year": 2020,
                    "ncaa_number": "",
                    "highschool_id": 645,
                    "highschool_string": "James Madison High School",
                    "parent_1_first": "Blanton",
                    "parent_1_last": "Satterfield",
                    "parent_1_phone": "+551-234-567890",
                    "parent_1_email": "alex+parent@sportsrecruits.com",
                    "parent_1_college": "",
                    "parent_2_first": "Jane",
                    "parent_2_last": "Satterfield",
                    "parent_2_phone": "+551-234-567890",
                    "parent_2_email": "alex+bsatter@yahoo.com",
                    "parent_2_college": "",
                    "other_sports": "<p>soccer, jv lacrosse<\/p>",
                    "second_sport_college": 0,
                    "extracurricular": "<p>Youth group, Younglife, Spanish Honor Society, Art Honor Society, Spanish Club<\/p>",
                    "class_rank": "",
                    "class_size": "570",
                    "gpa": "4.00",
                    "gpa_unrestricted": "4.00",
                    "gpa_scale": "4.00",
                    "gpa_is_weighted": 0,
                    "act_score": "29",
                    "sat_math": "230",
                    "sat_verbal": "250",
                    "sat_writing": "0",
                    "sat_tot_math_verbal": "480",
                    "sat_tot_math_verbal_writing": "0",
                    "sat_2_sub_1": "Biology E",
                    "sat_2_sub_1_score": "0",
                    "sat_2_sub_2": "Biology E",
                    "sat_2_sub_2_score": "0",
                    "honors": "<p>NFHCA National Academic Squad Athletic honor roll 2014-2016 Academic Letter-2015<\/p>",
                    "referred_by": "",
                    "modified": "2017-10-18 22:27:11",
                    "highschool_state": "",
                    "highschool_city": ""
                },
                "sport_info": null,
                "image": {
                    "id": 84899,
                    "file_path": "images\/fieldhockeyrecruits\/2017\/9\/",
                    "file_name": "139_53769_donkey_kong.jpg"
                }
            }
        },
        "actions": {
            "program_favorite_state": 1,
            "high_five_state": 0,
            "high_five_count": 0
        },
        "details": {
            "time_of_view": "2017-11-08 23:37:45"
        }
    }, {
        "id": 6441580,
        "type": 4,
        "ref_program_id": 5084,
        "created_at": "2017-11-08 23:37:08",
        "updated_at": null,
        "source_user": {
            "id": 25023,
            "first_name": "Beth",
            "last_name": "Bacher",
            "user_type": 2,
            "url": "beth_bacher",
            "user_details": {
                "id": 9344,
                "position": "Head",
                "active": 1
            }
        },
        "program": {
            "type": "programs",
            "id": 5084,
            "url": "fitchburg_state__w",
            "gender": "2",
            "website": "fscfalcons.com\/sports\/fh\/index",
            "division": {
                "id": 41,
                "site_id": 3,
                "name": "NCAA DIII",
                "gender": 2,
                "is_search_option": 1
            },
            "conference": {
                "id": 40,
                "name": "Little East Conference (LEC)",
                "division_id": 0,
                "active": 1
            },
            "address1": null,
            "address2": null,
            "city": "Fitchburg",
            "state": "MA",
            "zip": null,
            "phone": null,
            "active": 1,
            "created_at": "2014-03-02 16:19:29",
            "updated_at": null,
            "college": {
                "type": "colleges",
                "id": 154,
                "name": "Fitchburg State ",
                "selectivity": "Less",
                "created_at": "2013-09-14 23:07:48",
                "updated_at": "0000-00-00 00:00:00",
                "details": {
                    "city": "Fitchburg",
                    "state": "Massachusetts"
                }
            },
            "image": {
                "id": 34362,
                "file_path": "file\/images\/lacrosserecruits\/2015\/",
                "file_name": "154_fitchburg_state_.png"
            }
        },
        "target_user": {
            "id": 53769,
            "first_name": "Emma",
            "last_name": "Satterfield",
            "user_type": 1,
            "url": "emma_satterfield",
            "user_details": {
                "id": 42779,
                "jersey_number": "",
                "honors": "",
                "expires_on": "2019-10-30 04:00:00",
                "membership_level": "bronze",
                "user_player_info": {
                    "id": 34814,
                    "user_id": 53769,
                    "class_year": 2020,
                    "ncaa_number": "",
                    "highschool_id": 645,
                    "highschool_string": "James Madison High School",
                    "parent_1_first": "Blanton",
                    "parent_1_last": "Satterfield",
                    "parent_1_phone": "+551-234-567890",
                    "parent_1_email": "alex+parent@sportsrecruits.com",
                    "parent_1_college": "",
                    "parent_2_first": "Jane",
                    "parent_2_last": "Satterfield",
                    "parent_2_phone": "+551-234-567890",
                    "parent_2_email": "alex+bsatter@yahoo.com",
                    "parent_2_college": "",
                    "other_sports": "<p>soccer, jv lacrosse<\/p>",
                    "second_sport_college": 0,
                    "extracurricular": "<p>Youth group, Younglife, Spanish Honor Society, Art Honor Society, Spanish Club<\/p>",
                    "class_rank": "",
                    "class_size": "570",
                    "gpa": "4.00",
                    "gpa_unrestricted": "4.00",
                    "gpa_scale": "4.00",
                    "gpa_is_weighted": 0,
                    "act_score": "29",
                    "sat_math": "230",
                    "sat_verbal": "250",
                    "sat_writing": "0",
                    "sat_tot_math_verbal": "480",
                    "sat_tot_math_verbal_writing": "0",
                    "sat_2_sub_1": "Biology E",
                    "sat_2_sub_1_score": "0",
                    "sat_2_sub_2": "Biology E",
                    "sat_2_sub_2_score": "0",
                    "honors": "<p>NFHCA National Academic Squad Athletic honor roll 2014-2016 Academic Letter-2015<\/p>",
                    "referred_by": "",
                    "modified": "2017-10-18 22:27:11",
                    "highschool_state": "",
                    "highschool_city": ""
                },
                "sport_info": null,
                "image": {
                    "id": 84899,
                    "file_path": "images\/fieldhockeyrecruits\/2017\/9\/",
                    "file_name": "139_53769_donkey_kong.jpg"
                }
            }
        },
        "actions": {
            "program_favorite_state": 1,
            "high_five_state": 0,
            "high_five_count": 0
        },
        "details": {
            "video_id": 87188,
            "video_name": "krss",
            "total_views": 10,
            "uploaded_at": "2017-08-09 20:47:32",
            "video_host": "krossover",
            "video_host_id": "intelligence\/embed\/89768",
            "thumbnail": "\/images\/player_profile\/krossover-video-thumb.jpg",
            "viewer": {
                "id": 9344,
                "position": "Head",
                "active": 1
            }
        }
    }, {
        "id": 6441580,
        "type": 4,
        "ref_program_id": 5084,
        "created_at": "2017-11-08 23:37:08",
        "updated_at": null,
        "source_user": {
            "id": 25023,
            "first_name": "Beth",
            "last_name": "Bacher",
            "user_type": 2,
            "url": "beth_bacher",
            "user_details": {
                "id": 9344,
                "position": "Head",
                "active": 1
            }
        },
        "program": {
            "type": "programs",
            "id": 5084,
            "url": "fitchburg_state__w",
            "gender": "2",
            "website": "fscfalcons.com\/sports\/fh\/index",
            "division": {
                "id": 41,
                "site_id": 3,
                "name": "NCAA DIII",
                "gender": 2,
                "is_search_option": 1
            },
            "conference": {
                "id": 40,
                "name": "Little East Conference (LEC)",
                "division_id": 0,
                "active": 1
            },
            "address1": null,
            "address2": null,
            "city": "Fitchburg",
            "state": "MA",
            "zip": null,
            "phone": null,
            "active": 1,
            "created_at": "2014-03-02 16:19:29",
            "updated_at": null,
            "college": {
                "type": "colleges",
                "id": 154,
                "name": "Fitchburg State ",
                "selectivity": "Less",
                "created_at": "2013-09-14 23:07:48",
                "updated_at": "0000-00-00 00:00:00",
                "details": {
                    "city": "Fitchburg",
                    "state": "Massachusetts"
                }
            },
            "image": {
                "id": 34362,
                "file_path": "file\/images\/lacrosserecruits\/2015\/",
                "file_name": "154_fitchburg_state_.png"
            }
        },
        "target_user": {
            "id": 53769,
            "first_name": "Emma",
            "last_name": "Satterfield",
            "user_type": 1,
            "url": "emma_satterfield",
            "user_details": {
                "id": 42779,
                "jersey_number": "",
                "honors": "",
                "expires_on": "2019-10-30 04:00:00",
                "membership_level": "bronze",
                "user_player_info": {
                    "id": 34814,
                    "user_id": 53769,
                    "class_year": 2020,
                    "ncaa_number": "",
                    "highschool_id": 645,
                    "highschool_string": "James Madison High School",
                    "parent_1_first": "Blanton",
                    "parent_1_last": "Satterfield",
                    "parent_1_phone": "+551-234-567890",
                    "parent_1_email": "alex+parent@sportsrecruits.com",
                    "parent_1_college": "",
                    "parent_2_first": "Jane",
                    "parent_2_last": "Satterfield",
                    "parent_2_phone": "+551-234-567890",
                    "parent_2_email": "alex+bsatter@yahoo.com",
                    "parent_2_college": "",
                    "other_sports": "<p>soccer, jv lacrosse<\/p>",
                    "second_sport_college": 0,
                    "extracurricular": "<p>Youth group, Younglife, Spanish Honor Society, Art Honor Society, Spanish Club<\/p>",
                    "class_rank": "",
                    "class_size": "570",
                    "gpa": "4.00",
                    "gpa_unrestricted": "4.00",
                    "gpa_scale": "4.00",
                    "gpa_is_weighted": 0,
                    "act_score": "29",
                    "sat_math": "230",
                    "sat_verbal": "250",
                    "sat_writing": "0",
                    "sat_tot_math_verbal": "480",
                    "sat_tot_math_verbal_writing": "0",
                    "sat_2_sub_1": "Biology E",
                    "sat_2_sub_1_score": "0",
                    "sat_2_sub_2": "Biology E",
                    "sat_2_sub_2_score": "0",
                    "honors": "<p>NFHCA National Academic Squad Athletic honor roll 2014-2016 Academic Letter-2015<\/p>",
                    "referred_by": "",
                    "modified": "2017-10-18 22:27:11",
                    "highschool_state": "",
                    "highschool_city": ""
                },
                "sport_info": null,
                "image": {
                    "id": 84899,
                    "file_path": "images\/fieldhockeyrecruits\/2017\/9\/",
                    "file_name": "139_53769_donkey_kong.jpg"
                }
            }
        },
        "actions": {
            "program_favorite_state": 1,
            "high_five_state": 0,
            "high_five_count": 0
        },
        "details": {
            "video_id": 87188,
            "video_name": "krss",
            "total_views": 10,
            "uploaded_at": "2017-08-09 20:47:32",
            "video_host": "krossover",
            "video_host_id": "intelligence\/embed\/89768",
            "thumbnail": "\/images\/player_profile\/krossover-video-thumb.jpg",
            "viewer": {
                "id": 9344,
                "position": "Head",
                "active": 1
            }
        }
    }];
    return activities;
  });

}
