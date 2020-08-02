var express = require('express');
var mysql = require('mysql');
var CRUD = require('mysql-crud');
var env = require('./env');
// var connection = env.Dbconnection;
// var transporter = env.transporter; 
var async = require('async');


/**
 *  @apiGroup category
 * @api {post} /econnerce/createcategory   createcategory
 * @apiName createcategory
 * @apiParam {Number} id            Mandatory categoryid
 * @apiParam {Number} category_name    Mandatory first_name.
 * @apiParam {Number} category_image   	Mandatory last_name.
 * @apiParam {String} email_id  	Mandatory email_id.
 * @apiParam {String} password   	Mandatory password.
 * @apiParam {String} category_type  Mandatory user_type.
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
 *  @apiGroup category
 * @api {post} /econnerce/updatecategory     updatecategory
 * @apiName  updatecategory
 * @apiParam {Number} id            Mandatory categoryid
 * @apiParam {Number} first_name    Mandatory first_name.
 * @apiParam {Number} last_name   	Mandatory last_name.
 * @apiParam {String} email_id  	Mandatory email_id.
 * @apiParam {String} password   	Mandatory password.
 * @apiParam {String} category_type  Mandatory user_type.
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
 *  @apiGroup category
 * @api {post} /category/deletecategory  deletecategory
 * @apiName deletecategory  
 * @apiParam {id} category   Mandatory id.
 * 
 */


 /**
 *  @apiGroup category
 * @api {get} /category/getcategory/:id  getcategory
 * @apiName getcategory
 * @apiParam {id} categoryid   Mandatory id.
 * 
 */



/**
 *  @apiGroup category
 * @api {get} /category/getallcategory  getallcategory
 * @apiName getallcategory
 * 
 * We would increase the fields as required.
 *
 */