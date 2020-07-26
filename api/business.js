var express = require('express');
var mysql = require('mysql');
var CRUD = require('mysql-crud');
var env = require('./env');
// var connection = env.Dbconnection;
// var transporter = env.transporter; 
var async = require('async');


/**

 * @api {post} /business/createBusiness   createBusiness
 *  @apiGroup Business
 * @apiName createBusiness
 * @apiParam {Number} id            Mandatory businessid
 * @apiParam {Number} first_name    Mandatory first_name.
 * @apiParam {Number} last_name   	Mandatory last_name.
 * @apiParam {String} email_id  	Mandatory email_id.
 * @apiParam {String} password   	Mandatory password.
 * @apiParam {String} business_type  Mandatory user_type.
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
 *  @apiGroup Business
 * @api {post} /business/updateBusiness     updateBusiness
 * @apiName  updateBusiness
 * @apiParam {Number} id            Mandatory businessid
 * @apiParam {Number} first_name    Mandatory first_name.
 * @apiParam {Number} last_name   	Mandatory last_name.
 * @apiParam {String} email_id  	Mandatory email_id.
 * @apiParam {String} password   	Mandatory password.
 * @apiParam {String} business_type  Mandatory user_type.
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
 *  @apiGroup Business
 * @api {post} /user/deleteBusiness  deleteBusiness
 * @apiName deleteBusiness  
 * @apiParam {id} business   Mandatory id.
 * 
 */


 /**
 *  @apiGroup Business
 * @api {get} /business/getBusiness/:id  getBusiness
 * @apiName getBusiness
 * @apiParam {id} businessid   Mandatory id.
 * 
 */



/**
 *  @apiGroup Business
 * @api {get} /business/getallBusiness  getallBusiness
 * @apiName getallBusiness
 * 
 * We would increase the fields as required.
 *
 */