define(['selector', 'bonzo'], function($, bonzo) {
  bonzo.setQueryEngine($);

  var methodObj = {
    construct: function(html) {
      return this.create(html);
    },
    create: function(node) {
      return new this.constructor(bonzo.create(node));
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
    methodObj.prototype[methods[i]] = bonzo[methods[i]];

  return methodObj;
});