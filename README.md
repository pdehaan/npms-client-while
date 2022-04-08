# npms-client-while

Inspired by https://github.com/ffflorian/api-clients/issues/948.

I wanted to search a bunch of packages via the https://npms.io/ [API](https://api-docs.npms.io/), but didn't want the 250 page size limit. This uses a `do..while` loop instead of the less elegant (maybe) solution of recursion from my https://github.com/pdehaan/eleventy-plugins/blob/main/fetch_data.mjs experiment.
