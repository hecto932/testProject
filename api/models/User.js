/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  	attributes: {
  		name: { 
  			type: 'string',
  			required: true
  		},
  		email: { 
  			type: 'email',
  			unique: true,
  			required: true
  		},
  		password: { 
  			type: 'string',
  			required: true
  		},
  		role: {
  			type: 'string',
  			enum: ['Administrator', 'User']
  		},
  		createdAt: {
  			type: 'datetime'
  		},
  		updatedAt: {
  			type: 'datetime',
  			defaultsTo: function (){
  				return new Date();
  			}
  		}
  	},
  	beforeCreate: function (values, next)
  	{
  		require('bcrypt').hash(values.password, 8, function passwordEncrypted(err, password){
  			if(err) return next(err);
  			values.password = password;
  			next();
  		});
  		console.log(values);
  	}
};

