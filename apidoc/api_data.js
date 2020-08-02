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
    "url": "/business/deleteBusiness",
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
  },
  {
    "type": "post",
    "url": "/User/createUser",
    "title": "createUser",
    "group": "User",
    "name": "createUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory Userid</p>"
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
            "field": "User_type",
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
    "filename": "api/user.js",
    "groupTitle": "User"
  },
  {
    "group": "User",
    "type": "post",
    "url": "/User/deleteUser",
    "title": "deleteUser",
    "name": "deleteUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "User",
            "description": "<p>Mandatory id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/user.js",
    "groupTitle": "User"
  },
  {
    "group": "User",
    "type": "get",
    "url": "/User/getUser/:id",
    "title": "getUser",
    "name": "getUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "Userid",
            "description": "<p>Mandatory id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/user.js",
    "groupTitle": "User"
  },
  {
    "group": "User",
    "type": "get",
    "url": "/User/getallUser",
    "title": "getallUser",
    "name": "getallUser_We_would_increase_the_fields_as_required.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "projectId",
            "description": "<p>Mandatory ProjectId</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/user.js",
    "groupTitle": "User"
  },
  {
    "group": "User",
    "type": "post",
    "url": "/User/updateUser",
    "title": "updateUser",
    "name": "updateUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory Userid</p>"
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
            "field": "User_type",
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
    "filename": "api/user.js",
    "groupTitle": "User"
  },
  {
    "group": "category",
    "type": "post",
    "url": "/econnerce/createcategory",
    "title": "createcategory",
    "name": "createcategory",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory categoryid</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "category_name",
            "description": "<p>Mandatory first_name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "category_image",
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
            "field": "category_type",
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
    "filename": "api/category.js",
    "groupTitle": "category"
  },
  {
    "group": "category",
    "type": "post",
    "url": "/category/deletecategory",
    "title": "deletecategory",
    "name": "deletecategory",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "category",
            "description": "<p>Mandatory id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/category.js",
    "groupTitle": "category"
  },
  {
    "group": "category",
    "type": "get",
    "url": "/category/getallcategory",
    "title": "getallcategory",
    "name": "getallcategory_We_would_increase_the_fields_as_required.",
    "version": "0.0.0",
    "filename": "api/category.js",
    "groupTitle": "category"
  },
  {
    "group": "category",
    "type": "get",
    "url": "/category/getcategory/:id",
    "title": "getcategory",
    "name": "getcategory",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "categoryid",
            "description": "<p>Mandatory id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "api/category.js",
    "groupTitle": "category"
  },
  {
    "group": "category",
    "type": "post",
    "url": "/econnerce/updatecategory",
    "title": "updatecategory",
    "name": "updatecategory",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Mandatory categoryid</p>"
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
            "field": "category_type",
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
    "filename": "api/category.js",
    "groupTitle": "category"
  }
] });
