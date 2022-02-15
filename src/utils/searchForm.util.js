const identifierUrl = 'http://hl7.org/fhir/sid/us-npi|';

function getSearchParams(req) {
  const fakeBaseUrl = 'http://test.com'; // This is only used to form a full url
  const searchQuery = new URL(fakeBaseUrl + req.originalUrl).search;
  return new URLSearchParams(searchQuery);
}

function getIdentifierField(params) {
  const identifierParts = params.identifier ? params.identifier.split('|') : [];
  let identArray = [];
  if (identifierParts) {
    identArray.push({
      label: 'Identifier System',
      name: 'identifier_system',
      value: identifierParts[0] ? identifierParts[0] : '',
    });
    identArray.push({
      label: 'Identifier Value',
      name: 'identifier_value',
      value: identifierParts[1] ? identifierParts[1] : '',
    });
  }
  return identArray;
}

function givenNameField(params) {
  return {
    label: 'Given (Name)',
    name: 'given',
    value: params.given ? params.given : '',
  };
}

function familyNameField(params) {
  return {
    label: 'Family (Name)',
    name: 'family',
    value: params.family ? params.family : '',
  };
}

function getPatientForm(params) {
  let patientArray = [];
  patientArray.push(givenNameField(params));
  patientArray.push(familyNameField(params));
  patientArray = patientArray.concat(getIdentifierField(params));
  return patientArray;
}

function getPractitionerForm(params) {
  const practitionerArray = [];
  practitionerArray.push(givenNameField(params));
  practitionerArray.push(familyNameField(params));
  practitionerArray.push({
    label: 'NPI',
    name: 'npi',
    value: params.identifier ? params.identifier.replace(identifierUrl, '') : '',
  });
  return practitionerArray;
}

const getFormData = (req, resourceName) => {
  const searchParams = getSearchParams(req);
  const params = searchParams ? Object.fromEntries(searchParams.entries()) : {};
  let formData = [];

  switch (resourceName) {
    case 'Patient':
      formData = formData.concat(getPatientForm(params));
      break;
    case 'Practitioner':
      formData = formData.concat(getPractitionerForm(params));
      break;
  }

  formData.push({ label: 'Source', name: 'source', value: params.source ? params.source : '' });

  return formData;
};

const getLastUpdate = function (req, prefix) {
  const searchParams = getSearchParams(req);
  let dateString = '';
  searchParams.forEach((value, key) => {
    if (key === '_lastUpdated' && value.includes(prefix, 0)) {
      dateString = value.replace(prefix, '');
    }
  });
  return dateString;
};

module.exports = {
  searchFormData: getFormData,
  lastUpdateStart: getLastUpdate,
  lastUpdateEnd: getLastUpdate,
};