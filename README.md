# combine
A merge routine that overwrites arrays and deletes keys present in a source object that have been set to *undefined*.

This is based off of JQuery's deep extend functionality with two modifications:

* Arrays are overwritten
* Object keys can be removed from a destination object by defining a key in the source object and setting it to *undefined*

The intent is to provide an immutable way of merging state objects that also supports removal of, and replacement of, all types of data. Its design allows for streamlining hierarchical state manipulation in Redux.

The routine is available in dist/ as an es6 or common-js module.
