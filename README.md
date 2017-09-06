# hubspot-component [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Integration component for elastic.io iPaaS that connects to Hubspot API

# hubspot-component
Hubspot Component component for the [elastic.io platform](http://www.elastic.io &#34;elastic.io platform&#34;)

## Getting Started

This component is interacting with Hubspot API. Following APIs are supported currently:
 * Contacts API

## Authentication

Authentication for Hubspot component is happening via OAuth 2.0 procedure. From integrator point of view no modification 
is required.

If you want to deploy you own version of the Hubspot component you need a new App in your Hubspot account. 
During app creation process you will be asked to specify
the callback URL, to process OAuth auehtncation via elastic.io platform your callback URL should be 

```
https://your-tenant.elastic.io/callback/oauth2
```

If you are testing it on default public tenant just use ``https://app.elastic.io/callback/oauth2``

Once you have clien ID and secret you need to configure following environment variables on the repository:
 * ``HUBSPOT_CLIENT_KEY``
 * ``HUBSPOT_CLIENT_SECRET``
 * ``HUBSPOT_REDIRECT_URL`` - you only need this if you are not on default public tenant

## Known issues

No known issues are there yet.

## TODOs

Implementation of the following APIs:
 * WebHooks
 * Calendar API
 * Companies API
 * Deals API
 * etc.


## License

Apache-2.0 © [elastic.io GmbH](https://www.elastic.io)


[npm-image]: https://badge.fury.io/js/hubspot-component.svg
[npm-url]: https://npmjs.org/package/hubspot-component
[travis-image]: https://travis-ci.org/elasticio/hubspot-component.svg?branch=master
[travis-url]: https://travis-ci.org/elasticio/hubspot-component
[daviddm-image]: https://david-dm.org/elasticio/hubspot-component.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/elasticio/hubspot-component
