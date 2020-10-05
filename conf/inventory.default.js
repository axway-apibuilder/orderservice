module.exports = {
	// The configuration settings for the OAS2 flow-node: inventoryservice
	pluginConfig: {
		'@axway/api-builder-plugin-fn-swagger': {
			'inventory': {
				// It is possible to override URI options when constructing
				// outbound requests to this service.
				uri: {
					// protocol: 'https',
					// host: 'hostname',
					// port: 443,
					// basePath: '/api'
				}
			}
		}
	},
	// The following authorization credentials needed to use this service.
	// Please follow this guide to manually configure these credentials:
	// https://docs.axway.com/bundle/API_Builder_4x_allOS_en/page/api_builder_credentials.html
	authorization: {
		credentials: {
			'inventoryservice basicAuth': {
				type: 'basic',
				username: 'LDgHxnY7/rmv4DqrhxqYXmRHbbqVQHik',
				password: ''
			}
		}
	}
};
