var express = require('express');
var mysql = require('mysql');
var CRUD = require('mysql-crud');
var async = require("async");
var fs = require('fs-extra')
var env = require('./env');
var Dbconnection = env.Dbconnection;
var usersCRUD = CRUD(connection,'users');
var model = require("mysql-model-orm");

var connection = env.connection;
var Model = new model(connection);

/** *
 *  @apiGroup User
 * @api {get} /User/getallUser  getallUser
 * @apiName getallUser
 * 
 * We would increase the fields as required.
 * @apiParam {Number} projectId            Mandatory ProjectId
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 */

exports.getallUser = async (req, res, next) => {
  try {
    var projectId = req.params.projectId ;
    let response = await Model.table("users").where("projectId="+projectId).select();
    if (response.err) { console.log('error');}
    else { 
     // console.log('fetched response');
     //    console.log(response);
           res.jsonp(response);
      }
  }
  catch{
    console.log("error");
  }

  
};



/** 
 * @api {post} /User/createUser   createUser
 * @apiGroup User
 * @apiName createUser
 * @apiParam {Number} id            Mandatory Userid
 * @apiParam {Number} first_name    Mandatory first_name.
 * @apiParam {Number} last_name   	Mandatory last_name.
 * @apiParam {String} email_id  	Mandatory email_id.
 * @apiParam {String} password   	Mandatory password.
 * @apiParam {String} User_type  Mandatory user_type.
 * @apiParam {Number} mobile_number   Optional mobile_number.
 * @apiParam {Number} country       country
 * @apiParam {Number} address   	Optional address.
 * @apiParam {String} apartment  	Optional apartment.
 * @apiParam {String} city_id  Optional city.
 * @apiParam {String} state_id 	Optional state.
 * @apiParam {Number} zip     Optional zip code.
 * @apiParam {Number} website     Mandatory website
 * 
 * We would increase the fields as required.
 *
 */




/**
 *  @apiGroup User
 * @api {post} /User/updateUser     updateUser
 * @apiName  updateUser
 * @apiParam {Number} id            Mandatory Userid
 * @apiParam {Number} first_name    Mandatory first_name.
 * @apiParam {Number} last_name   	Mandatory last_name.
 * @apiParam {String} email_id  	Mandatory email_id.
 * @apiParam {String} password   	Mandatory password.
 * @apiParam {String} User_type  Mandatory user_type.
 * @apiParam {Number} mobile_number   Optional mobile_number.
 * @apiParam {Number} country       country
 * @apiParam {Number} address   	Optional address.
 * @apiParam {String} apartment  	Optional apartment.
 * @apiParam {String} city_id  Optional city.
 * @apiParam {String} state_id 	Optional state.
 * @apiParam {Number} zip     Optional zip code.
 * @apiParam {Number} website     Mandatory website
 * 
 * We would increase the fields as required.
 *
 */



 /**
 *  @apiGroup User
 * @api {post} /User/deleteUser  deleteUser
 * @apiName deleteUser  
 * @apiParam {id} User   Mandatory id.
 * 
 */


 /**
 *  @apiGroup User
 * @api {get} /User/getUser/:id  getUser
 * @apiName getUser
 * @apiParam {id} Userid   Mandatory id.
 * 
 */



exports.findAll = function(req, res) {
  console.log("Find All");
  res.send('Hello World! from User');
	// connection.query("SELECT * from users where IsActive=1 limit 10", function(err, rows) {
	// 	if(rows.length>0){
	// 		res.jsonp(rows);
	// 	}else{
	// 		res.jsonp("");
	// 	}
	// });
};



