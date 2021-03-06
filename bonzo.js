/*
 * bonzo.js bridge library for amdquery
 * https://github.com/guybedford/bonzo-amd
 *
 * Bonzo:
 * https://github.com/ded/bonzo
 * 
 * Inspiration - https://github.com/ded/bonzo/blob/master/src/ender.js
 * 
 */
define(['amdquery', 'bonzo-lib'], function($, bonzo) {
  bonzo.setQueryEngine($);

  var bonzoInstance = bonzo();

  var methodObj = {
    construct: function(html) {
      return this.create(html);
    },
    create: function(node) {
      return new this(bonzo.create(node));
    },
    prototype: {}
  };

  var staticProperties = ['firstChild', 'viewport', 'doc', 'isAncestor'];
  for (var i = 0; i < staticProperties.length; i++)
    methodObj[staticProperties[i]] = bonzo[staticProperties[i]];

  var methods = ['each', 'map', 'html', 'text', 'addClass', 'removeClass', 'hasClass', 'toggleClass', 'show', 'hide', 
    'first', 'last', 'focus', 'blur', 'next', 'previous', 'parent', 'append', 'appendTo', 'prepend', 'prependTo', 'before', 
    'insertBefore', 'after', 'insertAfter', 'replaceWith', 'clone', 'css', 'offset', 'dim', 'attr', 'val',
    'data', 'remove', 'empty', 'detach', 'scrollLeft', 'scrollTop', 'children'];
  for (var i = 0; i < methods.length; i++)
    methodObj.prototype[methods[i]] = bonzoInstance[methods[i]];

  return methodObj;
});
