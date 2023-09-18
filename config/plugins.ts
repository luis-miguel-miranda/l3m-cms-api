export default ({ env }) => ({
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
	  baseUrl: env('CDN_URL'),
          //rootPath: env('CDN_ROOT_PATH'),
          s3Options: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_ACCESS_SECRET'),
            region: env('AWS_REGION'),
            params: {
              ACL: env('AWS_ACL'),
              signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES'),
              Bucket: env('AWS_BUCKET'),
            },
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
});
