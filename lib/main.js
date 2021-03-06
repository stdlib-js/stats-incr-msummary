/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isPositiveInteger = require( '@stdlib/assert-is-positive-integer' ).isPrimitive;
var incrmsum = require( '@stdlib/stats-incr-msum' );
var incrmmean = require( '@stdlib/stats-incr-mmean' );
var incrmvariance = require( '@stdlib/stats-incr-mvariance' );
var incrmstdev = require( '@stdlib/stats-incr-mstdev' );
var incrmmin = require( '@stdlib/stats-incr-mmin' );
var incrmmax = require( '@stdlib/stats-incr-mmax' );
var incrmrange = require( '@stdlib/stats-incr-mrange' );
var incrmmidrange = require( '@stdlib/stats-incr-mmidrange' );
var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Returns an accumulator function which incrementally computes a moving statistical summary.
*
* @param {PositiveInteger} W - window size
* @throws {TypeError} must provide a positive integer
* @returns {Function} accumulator function
*
* @example
* var accumulator = incrmsummary( 3 );
*
* var summary = accumulator();
* // returns {}
*
* summary = accumulator( 2.0 );
* // returns {...}
*
* summary = accumulator( -5.0 );
* // returns {...}
*
* summary = accumulator();
* // returns {...}
*/
function incrmsummary( W ) {
	var mvariance;
	var mmidrange;
	var summary;
	var mrange;
	var mstdev;
	var mmean;
	var msum;
	var mmax;
	var mmin;
	if ( !isPositiveInteger( W ) ) {
		throw new TypeError( format( 'invalid argument. Must provide a positive integer. Value: `%s`.', W ) );
	}
	mvariance = incrmvariance( W );
	mmidrange = incrmmidrange( W );
	mrange = incrmrange( W );
	mstdev = incrmstdev( W );
	mmean = incrmmean( W );
	msum = incrmsum( W );
	mmin = incrmmin( W );
	mmax = incrmmax( W );
	summary = {};

	return accumulator;

	/**
	* If provided a value, the accumulator function returns an updated summary. If not provided a value, the accumulator function returns the current summary.
	*
	* @private
	* @param {number} [x] - new value
	* @returns {Object} summary
	*/
	function accumulator( x ) {
		if ( arguments.length === 0 ) {
			return summary;
		}
		summary.window = W;
		summary.sum = msum( x );
		summary.mean = mmean( x );
		summary.variance = mvariance( x );
		summary.stdev = mstdev( x );
		summary.min = mmin( x );
		summary.max = mmax( x );
		summary.range = mrange( x );
		summary.midrange = mmidrange( x );
		return summary;
	}
}


// EXPORTS //

module.exports = incrmsummary;
