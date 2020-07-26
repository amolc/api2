define({ "api": [
  {
    "type": "post",
    "url": "/business/createBusiness",
    "title": "createBusiness",
    "group": "Business",
    "name": "createBusiness",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory businessid</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "first_name",
            "description": "<p>Mandatory first_name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "last_name",
            "description": "<p>Mandatory last_name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email_id",
            "description": "<p>Mandatory email_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mandatory password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "business_type",
            "description": "<p>Mandatory user_type.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobile_number",
            "description": "<p>Optional mobile_number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "country",
            "description": "<p>country</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "address",
            "description": "<p>Optional address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apartment",
            "description": "<p>Optional apartment.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city_id",
            "description": "<p>Optional city.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state_id",
            "description": "<p>Optional state.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "zip",
            "description": "<p>Optional zip code.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "website",
            "description": "<p>Mandatory website</p> <p>We would increase the fields as required.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/business.js",
    "groupTitle": "Business"
  },
  {
    "group": "Business",
    "type": "post",
    "url": "/user/deleteBusiness",
    "title": "deleteBusiness",
    "name": "deleteBusiness",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "business",
            "description": "<p>Mandatory id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/business.js",
    "groupTitle": "Business"
  },
  {
    "group": "Business",
    "type": "get",
    "url": "/business/getBusiness/:id",
    "title": "getBusiness",
    "name": "getBusiness",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "businessid",
            "description": "<p>Mandatory id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/business.js",
    "groupTitle": "Business"
  },
  {
    "group": "Business",
    "type": "get",
    "url": "/business/getallBusiness",
    "title": "getallBusiness",
    "name": "getallBusiness_We_would_increase_the_fields_as_required.",
    "version": "0.0.0",
    "filename": "api/business.js",
    "groupTitle": "Business"
  },
  {
    "group": "Business",
    "type": "post",
    "url": "/business/updateBusiness",
    "title": "updateBusiness",
    "name": "updateBusiness",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory businessid</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "first_name",
            "description": "<p>Mandatory first_name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "last_name",
            "description": "<p>Mandatory last_name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email_id",
            "description": "<p>Mandatory email_id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Mandatory password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "business_type",
            "description": "<p>Mandatory user_type.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobile_number",
            "description": "<p>Optional mobile_number.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "country",
            "description": "<p>country</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "address",
            "description": "<p>Optional address.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "apartment",
            "description": "<p>Optional apartment.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city_id",
            "description": "<p>Optional city.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state_id",
            "description": "<p>Optional state.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "zip",
            "description": "<p>Optional zip code.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "website",
            "description": "<p>Mandatory website</p> <p>We would increase the fields as required.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/business.js",
    "groupTitle": "Business"
  }
] });
