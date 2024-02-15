process.env.AUTH_ENABLED = '1';
process.env.AUTH_JWKS_URL = 'http://foo:80/.well-known/jwks.json';
process.env.AUTH_ISSUER = 'http://foo:80';
process.env.NODE_ENV = 'production';
process.env.VALIDATE_SCHEMA = '1';
process.env.EXTERNAL_AUTH_JWKS_URLS = 'http://foo:80/bar/.well-known/jwks.json';
process.env.AUTH_CUSTOM_GROUP = 'groups';
process.env.AUTH_CUSTOM_SCOPE = 'customscope';
process.env.AUTH_CUSTOM_CLIENT_ID = 'custom_client_id';
process.env.CREATE_INDEX_ON_COLLECTION_CREATION = '1';
process.env.USE_TWO_STEP_SEARCH_OPTIMIZATION = '0';
process.env.STREAM_RESPONSE = '1';
// process.env.OLD_SEARCH = '1';
process.env.COLLECTIONS_ACCESS_INDEX = 'AuditEvent_4_0_0';
process.env.LOG_STREAM_STEPS = '0';
process.env.STREAMING_BATCH_COUNT = '10';
process.env.ENABLE_PATIENT_FILTERING = '1';
process.env.ENABLE_EVENTS_KAFKA = '0';
process.env.ENABLE_KAFKA_HEALTHCHECK = '0';
process.env.SET_INDEX_HINTS = '0';
process.env.PARTITION_RESOURCES = 'AuditEvent';
process.env.LOGLEVEL = 'TRACE';
process.env.GRIDFS_RESOURCES = 'DocumentReference';
process.env.REQUIRED_AUDIT_EVENT_FILTERS = 'date';
process.env.AUDIT_EVENT_MAX_RANGE_PERIOD = '240';
process.env.KAFKA_SASL_USERNAME = 'msk_user_dev_ue1';
process.env.KAFKA_SASL_PASSWORD = 'foo;ar';
process.env.KAFKA_MAX_RETRY = '3';
process.env.ENABLE_CONSENTED_PROA_DATA_ACCESS = '1';
process.env.ENABLE_HIE_TREATMENT_RELATED_DATA_ACCESS = '1';
process.env.EXTERNAL_REQUEST_TIMEOUT_SEC = '5';
process.env.DEFAULT_SORT_ID = '_uuid';
