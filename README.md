<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# incrmsummary

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute a moving statistical summary incrementally.



<section class="usage">

## Usage

```javascript
import incrmsummary from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-msummary@deno/mod.js';
```

#### incrmsummary( window )

Returns an accumulator `function` which incrementally computes a moving statistical summary. The `window` parameter defines the number of values over which to compute the moving summary.

```javascript
var accumulator = incrmsummary( 3 );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated summary. If not provided an input value `x`, the accumulator function returns the current summary.

```javascript
var accumulator = incrmsummary( 3 );

var summary = accumulator();
// returns {}

// Fill the window...
summary = accumulator( 2.0 ); // [2.0]
/* returns
    {
        'window': 3,
        'sum': 2.0,
        'mean': 2.0,
        'variance': 0.0,
        'stdev': 0.0,
        'min': 2.0,
        'max': 2.0,
        'range': 0.0,
        'midrange': 2.0
    }
*/

summary = accumulator( 1.0 ); // [2.0, 1.0]
/* returns
    {
        'window': 3,
        'sum': 3.0,
        'mean': 1.5,
        'variance': 0.5,
        'stdev': 0.7071067811865476,
        'min': 1.0,
        'max': 2.0,
        'range': 1.0,
        'midrange': 1.5
    }
*/

summary = accumulator( -3.0 ); // [2.0, 1.0, -3.0]
/* returns
    {
        'window': 3,
        'sum': 0.0,
        'mean': 0.0,
        'variance': 7.0,
        'stdev': 2.6457513110645907,
        'min': -3.0,
        'max': 2.0,
        'range': 5.0,
        'midrange': -0.5
    }
*/

// Window begins sliding...
summary = accumulator( -7.0 ); // [1.0, -3.0, -7.0]
// returns {...}

summary = accumulator( -5.0 ); // [-3.0, -7.0, -5.0]
// returns {...}

summary = accumulator();
// returns {...}
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   As `W` values are needed to fill the window buffer, the first `W-1` returned summaries are calculated from smaller sample sizes. Until the window is full, each returned summary is calculated from all provided values.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import incrmsummary from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-msummary@deno/mod.js';

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrmsummary( 5 );

// For each simulated datum, update the moving summary...
for ( i = 0; i < 100; i++ ) {
    v = randu() * 100.0;
    accumulator( v );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-incr/mmean`][@stdlib/stats/incr/mmean]</span><span class="delimiter">: </span><span class="description">compute a moving arithmetic mean incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/mstdev`][@stdlib/stats/incr/mstdev]</span><span class="delimiter">: </span><span class="description">compute a moving corrected sample standard deviation incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/msum`][@stdlib/stats/incr/msum]</span><span class="delimiter">: </span><span class="description">compute a moving sum incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/mvariance`][@stdlib/stats/incr/mvariance]</span><span class="delimiter">: </span><span class="description">compute a moving unbiased sample variance incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/summary`][@stdlib/stats/incr/summary]</span><span class="delimiter">: </span><span class="description">compute a statistical summary incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-msummary.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-msummary

[test-image]: https://github.com/stdlib-js/stats-incr-msummary/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-incr-msummary/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-msummary/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-msummary?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-msummary.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-msummary/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-incr-msummary/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-incr-msummary/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-incr-msummary/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-incr-msummary/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-msummary/main/LICENSE

<!-- <related-links> -->

[@stdlib/stats/incr/mmean]: https://github.com/stdlib-js/stats-incr-mmean/tree/deno

[@stdlib/stats/incr/mstdev]: https://github.com/stdlib-js/stats-incr-mstdev/tree/deno

[@stdlib/stats/incr/msum]: https://github.com/stdlib-js/stats-incr-msum/tree/deno

[@stdlib/stats/incr/mvariance]: https://github.com/stdlib-js/stats-incr-mvariance/tree/deno

[@stdlib/stats/incr/summary]: https://github.com/stdlib-js/stats-incr-summary/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
