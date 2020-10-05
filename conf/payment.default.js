module.exports = {
	// The configuration settings for the OAS2 flow-node: paymentservice
	pluginConfig: {
		'@axway/api-builder-plugin-fn-swagger': {
			'payment': {
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
			'paymentservice basicAuth': {
				type: 'basic',
				username: 'j5ohDN0AauF7Ec6UtLebwzp51KAvqQOd',
				password: ''
			}
		}
	}
};
