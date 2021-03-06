const fs = require('fs')
const fetch = require('node-fetch')
const FormData = require('form-data')

const config = require('../config')

const host = {
  ihub: config.host.ihub,
  pfalfa: config.host.pfalfa,
}

const headerOptions = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
}

async function get(hostApi, endpoint, headerAuth = null) {
  if (headerAuth) {
    headerOptions.Authorization = headerAuth
  }

  return fetch(`${hostApi}/${endpoint}`, {
    method: 'GET',
    // credentials: 'same-origin',
    headers: headerOptions,
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => error)
}

async function post(hostApi, endpoint, payload, headerAuth = null) {
  if (headerAuth) {
    headerOptions.Authorization = headerAuth
  }

  return fetch(`${hostApi}/${endpoint}`, {
    method: 'POST',
    // credentials: 'same-origin',
    headers: headerOptions,
    body: JSON.stringify(payload),
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => error)
}

async function put(hostApi, endpoint, payload, headerAuth = null) {
  if (headerAuth) {
    headerOptions.Authorization = headerAuth
  }

  return fetch(`${hostApi}/${endpoint}`, {
    method: 'PUT',
    // credentials: 'same-origin',
    headers: headerOptions,
    body: JSON.stringify(payload),
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => error)
}

async function del(hostApi, endpoint, headerAuth = null) {
  if (headerAuth) {
    headerOptions.Authorization = headerAuth
  }

  return fetch(`${hostApi}/${endpoint}`, {
    method: 'DELETE',
    // credentials: 'same-origin',
    headers: headerOptions,
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => error)
}

async function upload(hostApi, endpoint, filePath, headerAuth = null, fileName = 'file') {
  const form = new FormData()
  const formHeaders = form.getHeaders()

  if (headerAuth) {
    formHeaders.Authorization = headerAuth
  }
  form.append(fileName, fs.createReadStream(filePath))

  return fetch(`${hostApi}/${endpoint}`, {
    method: 'POST',
    // credentials: 'same-origin',
    body: form,
    headers: formHeaders,
  })
    .then(response => response.json())
    .then(data => data)
    .catch(error => error)
}

module.exports = api = { host, get, post, put, del, upload }
