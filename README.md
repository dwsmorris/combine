# combine
A merge routine that overwrites arrays and deletes keys present in a source object but set to *undefined*

This is based off of Lodash's merge functionality with two modifications:

* Arrays are overwritten
* Object keys can be removed from a destination object by defining a key in the source object and setting it to *undefined*

The intent is to provide an immutable way of merging state objects that also supports removal of and replacement of data. It's original application is in streamlining hierarchical state manipulation in Redux.
