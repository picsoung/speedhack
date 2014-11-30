/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') ***REMOVED*** throw new Error('Bootstrap\'s JavaScript requires jQuery') ***REMOVED***

/* ========================================================================
 * Bootstrap: transition.js v3.2.0
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) ***REMOVED***
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() ***REMOVED***
    var el = document.createElement('bootstrap')

    var transEndEventNames = ***REMOVED***
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
***REMOVED***

    for (var name in transEndEventNames) ***REMOVED***
      if (el.style[name] !== undefined) ***REMOVED***
        return ***REMOVED*** end: transEndEventNames[name] ***REMOVED***
  ***REMOVED***
***REMOVED***

    return false // explicit for ie8 (  ._.)
  ***REMOVED***

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) ***REMOVED***
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () ***REMOVED*** called = true ***REMOVED***)
    var callback = function () ***REMOVED*** if (!called) $($el).trigger($.support.transition.end) ***REMOVED***
    setTimeout(callback, duration)
    return this
  ***REMOVED***

  $(function () ***REMOVED***
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = ***REMOVED***
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) ***REMOVED***
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
  ***REMOVED***
***REMOVED***
  ***REMOVED***)

***REMOVED***(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.2.0
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) ***REMOVED***
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) ***REMOVED***
    $(el).on('click', dismiss, this.close)
  ***REMOVED***

  Alert.VERSION = '3.2.0'

  Alert.prototype.close = function (e) ***REMOVED***
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) ***REMOVED***
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
***REMOVED***

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) ***REMOVED***
      $parent = $this.hasClass('alert') ? $this : $this.parent()
***REMOVED***

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() ***REMOVED***
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
***REMOVED***

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(150) :
      removeElement()
  ***REMOVED***


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) ***REMOVED***
    return this.each(function () ***REMOVED***
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
***REMOVED***)
  ***REMOVED***

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () ***REMOVED***
    $.fn.alert = old
    return this
  ***REMOVED***


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

***REMOVED***(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.2.0
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) ***REMOVED***
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) ***REMOVED***
    this.$element  = $(element)
    this.options   = $.extend(***REMOVED******REMOVED***, Button.DEFAULTS, options)
    this.isLoading = false
  ***REMOVED***

  Button.VERSION  = '3.2.0'

  Button.DEFAULTS = ***REMOVED***
    loadingText: 'loading...'
  ***REMOVED***

  Button.prototype.setState = function (state) ***REMOVED***
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    $el[val](data[state] == null ? this.options[state] : data[state])

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () ***REMOVED***
      if (state == 'loadingText') ***REMOVED***
        this.isLoading = true
        $el.addClass(d).attr(d, d)
  ***REMOVED*** else if (this.isLoading) ***REMOVED***
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
  ***REMOVED***
***REMOVED*** this), 0)
  ***REMOVED***

  Button.prototype.toggle = function () ***REMOVED***
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) ***REMOVED***
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') ***REMOVED***
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false
        else $parent.find('.active').removeClass('active')
  ***REMOVED***
      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
***REMOVED***

    if (changed) this.$element.toggleClass('active')
  ***REMOVED***


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) ***REMOVED***
    return this.each(function () ***REMOVED***
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
***REMOVED***)
  ***REMOVED***

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () ***REMOVED***
    $.fn.button = old
    return this
  ***REMOVED***


  // BUTTON DATA-API
  // ===============

  $(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) ***REMOVED***
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    Plugin.call($btn, 'toggle')
    e.preventDefault()
  ***REMOVED***)

***REMOVED***(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.2.0
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) ***REMOVED***
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) ***REMOVED***
    this.$element    = $(element).on('keydown.bs.carousel', $.proxy(this.keydown, this))
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      =
    this.sliding     =
    this.interval    =
    this.$active     =
    this.$items      = null

    this.options.pause == 'hover' && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  ***REMOVED***

  Carousel.VERSION  = '3.2.0'

  Carousel.DEFAULTS = ***REMOVED***
    interval: 5000,
    pause: 'hover',
    wrap: true
  ***REMOVED***

  Carousel.prototype.keydown = function (e) ***REMOVED***
    switch (e.which) ***REMOVED***
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
***REMOVED***

    e.preventDefault()
  ***REMOVED***

  Carousel.prototype.cycle = function (e) ***REMOVED***
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  ***REMOVED***

  Carousel.prototype.getItemIndex = function (item) ***REMOVED***
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  ***REMOVED***

  Carousel.prototype.to = function (pos) ***REMOVED***
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () ***REMOVED*** that.to(pos) ***REMOVED***) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
  ***REMOVED***

  Carousel.prototype.pause = function (e) ***REMOVED***
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) ***REMOVED***
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
***REMOVED***

    this.interval = clearInterval(this.interval)

    return this
  ***REMOVED***

  Carousel.prototype.next = function () ***REMOVED***
    if (this.sliding) return
    return this.slide('next')
  ***REMOVED***

  Carousel.prototype.prev = function () ***REMOVED***
    if (this.sliding) return
    return this.slide('prev')
  ***REMOVED***

  Carousel.prototype.slide = function (type, next) ***REMOVED***
    var $active   = this.$element.find('.item.active')
    var $next     = next || $active[type]()
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var fallback  = type == 'next' ? 'first' : 'last'
    var that      = this

    if (!$next.length) ***REMOVED***
      if (!this.options.wrap) return
      $next = this.$element.find('.item')[fallback]()
***REMOVED***

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', ***REMOVED***
      relatedTarget: relatedTarget,
      direction: direction
***REMOVED***)
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) ***REMOVED***
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
***REMOVED***

    var slidEvent = $.Event('slid.bs.carousel', ***REMOVED*** relatedTarget: relatedTarget, direction: direction ***REMOVED***) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) ***REMOVED***
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () ***REMOVED***
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () ***REMOVED***
            that.$element.trigger(slidEvent)
  ***REMOVED***, 0)
***REMOVED***)
        .emulateTransitionEnd($active.css('transition-duration').slice(0, -1) * 1000)
***REMOVED*** else ***REMOVED***
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
***REMOVED***

    isCycling && this.cycle()

    return this
  ***REMOVED***


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) ***REMOVED***
    return this.each(function () ***REMOVED***
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend(***REMOVED******REMOVED***, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
***REMOVED***)
  ***REMOVED***

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () ***REMOVED***
    $.fn.carousel = old
    return this
  ***REMOVED***


  // CAROUSEL DATA-API
  // =================

  $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) ***REMOVED***
    var href
    var $this   = $(this)
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
    if (!$target.hasClass('carousel')) return
    var options = $.extend(***REMOVED******REMOVED***, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) ***REMOVED***
      $target.data('bs.carousel').to(slideIndex)
***REMOVED***

    e.preventDefault()
  ***REMOVED***)

  $(window).on('load', function () ***REMOVED***
    $('[data-ride="carousel"]').each(function () ***REMOVED***
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
***REMOVED***)
  ***REMOVED***)

***REMOVED***(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.2.0
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) ***REMOVED***
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) ***REMOVED***
    this.$element      = $(element)
    this.options       = $.extend(***REMOVED******REMOVED***, Collapse.DEFAULTS, options)
    this.transitioning = null

    if (this.options.parent) this.$parent = $(this.options.parent)
    if (this.options.toggle) this.toggle()
  ***REMOVED***

  Collapse.VERSION  = '3.2.0'

  Collapse.DEFAULTS = ***REMOVED***
    toggle: true
  ***REMOVED***

  Collapse.prototype.dimension = function () ***REMOVED***
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  ***REMOVED***

  Collapse.prototype.show = function () ***REMOVED***
    if (this.transitioning || this.$element.hasClass('in')) return

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var actives = this.$parent && this.$parent.find('> .panel > .in')

    if (actives && actives.length) ***REMOVED***
      var hasData = actives.data('bs.collapse')
      if (hasData && hasData.transitioning) return
      Plugin.call(actives, 'hide')
      hasData || actives.data('bs.collapse', null)
***REMOVED***

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)

    this.transitioning = 1

    var complete = function () ***REMOVED***
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
***REMOVED***

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(350)[dimension](this.$element[0][scrollSize])
  ***REMOVED***

  Collapse.prototype.hide = function () ***REMOVED***
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse')
      .removeClass('in')

    this.transitioning = 1

    var complete = function () ***REMOVED***
      this.transitioning = 0
      this.$element
        .trigger('hidden.bs.collapse')
        .removeClass('collapsing')
        .addClass('collapse')
***REMOVED***

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(350)
  ***REMOVED***

  Collapse.prototype.toggle = function () ***REMOVED***
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  ***REMOVED***


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) ***REMOVED***
    return this.each(function () ***REMOVED***
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend(***REMOVED******REMOVED***, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && option == 'show') option = !option
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
***REMOVED***)
  ***REMOVED***

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () ***REMOVED***
    $.fn.collapse = old
    return this
  ***REMOVED***


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) ***REMOVED***
    var href
    var $this   = $(this)
    var target  = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7
    var $target = $(target)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()
    var parent  = $this.attr('data-parent')
    var $parent = parent && $(parent)

    if (!data || !data.transitioning) ***REMOVED***
      if ($parent) $parent.find('[data-toggle="collapse"][data-parent="' + parent + '"]').not($this).addClass('collapsed')
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
***REMOVED***

    Plugin.call($target, option)
  ***REMOVED***)

***REMOVED***(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.2.0
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) ***REMOVED***
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) ***REMOVED***
    $(element).on('click.bs.dropdown', this.toggle)
  ***REMOVED***

  Dropdown.VERSION = '3.2.0'

  Dropdown.prototype.toggle = function (e) ***REMOVED***
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) ***REMOVED***
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) ***REMOVED***
        // if mobile we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
  ***REMOVED***

      var relatedTarget = ***REMOVED*** relatedTarget: this ***REMOVED***
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.trigger('focus')

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)
***REMOVED***

    return false
  ***REMOVED***

  Dropdown.prototype.keydown = function (e) ***REMOVED***
    if (!/(38|40|27)/.test(e.keyCode)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive || (isActive && e.keyCode == 27)) ***REMOVED***
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
***REMOVED***

    var desc = ' li:not(.divider):visible a'
    var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc)

    if (!$items.length) return

    var index = $items.index($items.filter(':focus'))

    if (e.keyCode == 38 && index > 0)                 index--                        // up
    if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index = 0

    $items.eq(index).trigger('focus')
  ***REMOVED***

  function clearMenus(e) ***REMOVED***
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () ***REMOVED***
      var $parent = getParent($(this))
      var relatedTarget = ***REMOVED*** relatedTarget: this ***REMOVED***
      if (!$parent.hasClass('open')) return
      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))
      if (e.isDefaultPrevented()) return
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
***REMOVED***)
  ***REMOVED***

  function getParent($this) ***REMOVED***
    var selector = $this.attr('data-target')

    if (!selector) ***REMOVED***
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
***REMOVED***

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  ***REMOVED***


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) ***REMOVED***
    return this.each(function () ***REMOVED***
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
***REMOVED***)
  ***REMOVED***

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () ***REMOVED***
    $.fn.dropdown = old
    return this
  ***REMOVED***


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) ***REMOVED*** e.stopPropagation() ***REMOVED***)
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle + ', [role="menu"], [role="listbox"]', Dropdown.prototype.keydown)

***REMOVED***(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.2.0
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) ***REMOVED***
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) ***REMOVED***
    this.options        = options
    this.$body          = $(document.body)
    this.$element       = $(element)
    this.$backdrop      =
    this.isShown        = null
    this.scrollbarWidth = 0

    if (this.options.remote) ***REMOVED***
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () ***REMOVED***
          this.$element.trigger('loaded.bs.modal')
***REMOVED***, this))
***REMOVED***
  ***REMOVED***

  Modal.VERSION  = '3.2.0'

  Modal.DEFAULTS = ***REMOVED***
    backdrop: true,
    keyboard: true,
    show: true
  ***REMOVED***

  Modal.prototype.toggle = function (_relatedTarget) ***REMOVED***
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  ***REMOVED***

  Modal.prototype.show = function (_relatedTarget) ***REMOVED***
    var that = this
    var e    = $.Event('show.bs.modal', ***REMOVED*** relatedTarget: _relatedTarget ***REMOVED***)

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.$body.addClass('modal-open')

    this.setScrollbar()
    this.escape()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.backdrop(function () ***REMOVED***
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) ***REMOVED***
        that.$element.appendTo(that.$body) // don't move modals dom position
  ***REMOVED***

      that.$element
        .show()
        .scrollTop(0)

      if (transition) ***REMOVED***
        that.$element[0].offsetWidth // force reflow
  ***REMOVED***

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', ***REMOVED*** relatedTarget: _relatedTarget ***REMOVED***)

      transition ?
        that.$element.find('.modal-dialog') // wait for modal to slide in
          .one('bsTransitionEnd', function () ***REMOVED***
            that.$element.trigger('focus').trigger(e)
  ***REMOVED***)
          .emulateTransitionEnd(300) :
        that.$element.trigger('focus').trigger(e)
***REMOVED***)
  ***REMOVED***

  Modal.prototype.hide = function (e) ***REMOVED***
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.$body.removeClass('modal-open')

    this.resetScrollbar()
    this.escape()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(300) :
      this.hideModal()
  ***REMOVED***

  Modal.prototype.enforceFocus = function () ***REMOVED***
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) ***REMOVED***
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) ***REMOVED***
          this.$element.trigger('focus')
***REMOVED***
  ***REMOVED*** this))
  ***REMOVED***

  Modal.prototype.escape = function () ***REMOVED***
    if (this.isShown && this.options.keyboard) ***REMOVED***
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) ***REMOVED***
        e.which == 27 && this.hide()
  ***REMOVED*** this))
***REMOVED*** else if (!this.isShown) ***REMOVED***
      this.$element.off('keyup.dismiss.bs.modal')
***REMOVED***
  ***REMOVED***

  Modal.prototype.hideModal = function () ***REMOVED***
    var that = this
    this.$element.hide()
    this.backdrop(function () ***REMOVED***
      that.$element.trigger('hidden.bs.modal')
***REMOVED***)
  ***REMOVED***

  Modal.prototype.removeBackdrop = function () ***REMOVED***
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  ***REMOVED***

  Modal.prototype.backdrop = function (callback) ***REMOVED***
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) ***REMOVED***
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) ***REMOVED***
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus.call(this.$element[0])
          : this.hide.call(this)
  ***REMOVED*** this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(150) :
        callback()

***REMOVED*** else if (!this.isShown && this.$backdrop) ***REMOVED***
      this.$backdrop.removeClass('in')

      var callbackRemove = function () ***REMOVED***
        that.removeBackdrop()
        callback && callback()
  ***REMOVED***
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(150) :
        callbackRemove()

***REMOVED*** else if (callback) ***REMOVED***
      callback()
***REMOVED***
  ***REMOVED***

  Modal.prototype.checkScrollbar = function () ***REMOVED***
    if (document.body.clientWidth >= window.innerWidth) return
    this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar()
  ***REMOVED***

  Modal.prototype.setScrollbar = function () ***REMOVED***
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    if (this.scrollbarWidth) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  ***REMOVED***

  Modal.prototype.resetScrollbar = function () ***REMOVED***
    this.$body.css('padding-right', '')
  ***REMOVED***

  Modal.prototype.measureScrollbar = function () ***REMOVED*** // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  ***REMOVED***


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) ***REMOVED***
    return this.each(function () ***REMOVED***
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend(***REMOVED******REMOVED***, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
***REMOVED***)
  ***REMOVED***

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () ***REMOVED***
    $.fn.modal = old
    return this
  ***REMOVED***


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) ***REMOVED***
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend(***REMOVED*** remote: !/#/.test(href) && href ***REMOVED***, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) ***REMOVED***
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () ***REMOVED***
        $this.is(':visible') && $this.trigger('focus')
  ***REMOVED***)
***REMOVED***)
    Plugin.call($target, option, this)
  ***REMOVED***)

***REMOVED***(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.2.0
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) ***REMOVED***
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) ***REMOVED***
    this.type       =
    this.options    =
    this.enabled    =
    this.timeout    =
    this.hoverState =
    this.$element   = null

    this.init('tooltip', element, options)
  ***REMOVED***

  Tooltip.VERSION  = '3.2.0'

  Tooltip.DEFAULTS = ***REMOVED***
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: ***REMOVED***
      selector: 'body',
      padding: 0
***REMOVED***
  ***REMOVED***

  Tooltip.prototype.init = function (type, element, options) ***REMOVED***
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport)

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) ***REMOVED***
      var trigger = triggers[i]

      if (trigger == 'click') ***REMOVED***
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
  ***REMOVED*** else if (trigger != 'manual') ***REMOVED***
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
  ***REMOVED***
***REMOVED***

    this.options.selector ?
      (this._options = $.extend(***REMOVED******REMOVED***, this.options, ***REMOVED*** trigger: 'manual', selector: '' ***REMOVED***)) :
      this.fixTitle()
  ***REMOVED***

  Tooltip.prototype.getDefaults = function () ***REMOVED***
    return Tooltip.DEFAULTS
  ***REMOVED***

  Tooltip.prototype.getOptions = function (options) ***REMOVED***
    options = $.extend(***REMOVED******REMOVED***, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') ***REMOVED***
      options.delay = ***REMOVED***
        show: options.delay,
        hide: options.delay
  ***REMOVED***
***REMOVED***

    return options
  ***REMOVED***

  Tooltip.prototype.getDelegateOptions = function () ***REMOVED***
    var options  = ***REMOVED******REMOVED***
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) ***REMOVED***
      if (defaults[key] != value) options[key] = value
***REMOVED***)

    return options
  ***REMOVED***

  Tooltip.prototype.enter = function (obj) ***REMOVED***
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) ***REMOVED***
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
***REMOVED***

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () ***REMOVED***
      if (self.hoverState == 'in') self.show()
***REMOVED*** self.options.delay.show)
  ***REMOVED***

  Tooltip.prototype.leave = function (obj) ***REMOVED***
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) ***REMOVED***
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
***REMOVED***

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () ***REMOVED***
      if (self.hoverState == 'out') self.hide()
***REMOVED*** self.options.delay.hide)
  ***REMOVED***

  Tooltip.prototype.show = function () ***REMOVED***
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) ***REMOVED***
      this.$element.trigger(e)

      var inDom = $.contains(document.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css(***REMOVED*** top: 0, left: 0, display: 'block' ***REMOVED***)
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) ***REMOVED***
        var orgPlacement = placement
        var $parent      = this.$element.parent()
        var parentDim    = this.getPosition($parent)

        placement = placement == 'bottom' && pos.top   + pos.height       + actualHeight - parentDim.scroll > parentDim.height ? 'top'    :
                    placement == 'top'    && pos.top   - parentDim.scroll - actualHeight < 0                                   ? 'bottom' :
                    placement == 'right'  && pos.right + actualWidth      > parentDim.width                                    ? 'left'   :
                    placement == 'left'   && pos.left  - actualWidth      < parentDim.left                                     ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
  ***REMOVED***

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () ***REMOVED***
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null
  ***REMOVED***

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(150) :
        complete()
***REMOVED***
  ***REMOVED***

  Tooltip.prototype.applyPlacement = function (offset, placement) ***REMOVED***
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend(***REMOVED***
      using: function (props) ***REMOVED***
        $tip.css(***REMOVED***
          top: Math.round(props.top),
          left: Math.round(props.left)
***REMOVED***)
  ***REMOVED***
***REMOVED*** offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) ***REMOVED***
      offset.top = offset.top + height - actualHeight
***REMOVED***

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var arrowDelta          = delta.left ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowPosition       = delta.left ? 'left'        : 'top'
    var arrowOffsetPosition = delta.left ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], arrowPosition)
  ***REMOVED***

  Tooltip.prototype.replaceArrow = function (delta, dimension, position) ***REMOVED***
    this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + '%') : '')
  ***REMOVED***

  Tooltip.prototype.setContent = function () ***REMOVED***
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  ***REMOVED***

  Tooltip.prototype.hide = function () ***REMOVED***
    var that = this
    var $tip = this.tip()
    var e    = $.Event('hide.bs.' + this.type)

    this.$element.removeAttr('aria-describedby')

    function complete() ***REMOVED***
      if (that.hoverState != 'in') $tip.detach()
      that.$element.trigger('hidden.bs.' + that.type)
***REMOVED***

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && this.$tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(150) :
      complete()

    this.hoverState = null

    return this
  ***REMOVED***

  Tooltip.prototype.fixTitle = function () ***REMOVED***
    var $e = this.$element
    if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') ***REMOVED***
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
***REMOVED***
  ***REMOVED***

  Tooltip.prototype.hasContent = function () ***REMOVED***
    return this.getTitle()
  ***REMOVED***

  Tooltip.prototype.getPosition = function ($element) ***REMOVED***
    $element   = $element || this.$element
    var el     = $element[0]
    var isBody = el.tagName == 'BODY'
    return $.extend(***REMOVED******REMOVED***, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : null, ***REMOVED***
      scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop(),
      width:  isBody ? $(window).width()  : $element.outerWidth(),
      height: isBody ? $(window).height() : $element.outerHeight()
***REMOVED*** isBody ? ***REMOVED*** top: 0, left: 0 ***REMOVED*** : $element.offset())
  ***REMOVED***

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) ***REMOVED***
    return placement == 'bottom' ? ***REMOVED*** top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  ***REMOVED*** :
           placement == 'top'    ? ***REMOVED*** top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  ***REMOVED*** :
           placement == 'left'   ? ***REMOVED*** top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth ***REMOVED*** :
        /* placement == 'right' */ ***REMOVED*** top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   ***REMOVED***

  ***REMOVED***

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) ***REMOVED***
    var delta = ***REMOVED*** top: 0, left: 0 ***REMOVED***
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) ***REMOVED***
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) ***REMOVED*** // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
  ***REMOVED*** else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) ***REMOVED*** // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
  ***REMOVED***
***REMOVED*** else ***REMOVED***
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) ***REMOVED*** // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
  ***REMOVED*** else if (rightEdgeOffset > viewportDimensions.width) ***REMOVED*** // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
  ***REMOVED***
***REMOVED***

    return delta
  ***REMOVED***

  Tooltip.prototype.getTitle = function () ***REMOVED***
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  ***REMOVED***

  Tooltip.prototype.getUID = function (prefix) ***REMOVED***
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  ***REMOVED***

  Tooltip.prototype.tip = function () ***REMOVED***
    return (this.$tip = this.$tip || $(this.options.template))
  ***REMOVED***

  Tooltip.prototype.arrow = function () ***REMOVED***
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  ***REMOVED***

  Tooltip.prototype.validate = function () ***REMOVED***
    if (!this.$element[0].parentNode) ***REMOVED***
      this.hide()
      this.$element = null
      this.options  = null
***REMOVED***
  ***REMOVED***

  Tooltip.prototype.enable = function () ***REMOVED***
    this.enabled = true
  ***REMOVED***

  Tooltip.prototype.disable = function () ***REMOVED***
    this.enabled = false
  ***REMOVED***

  Tooltip.prototype.toggleEnabled = function () ***REMOVED***
    this.enabled = !this.enabled
  ***REMOVED***

  Tooltip.prototype.toggle = function (e) ***REMOVED***
    var self = this
    if (e) ***REMOVED***
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) ***REMOVED***
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
  ***REMOVED***
***REMOVED***

    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  ***REMOVED***

  Tooltip.prototype.destroy = function () ***REMOVED***
    clearTimeout(this.timeout)
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
  ***REMOVED***


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) ***REMOVED***
    return this.each(function () ***REMOVED***
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
***REMOVED***)
  ***REMOVED***

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () ***REMOVED***
    $.fn.tooltip = old
    return this
  ***REMOVED***

***REMOVED***(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.2.0
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) ***REMOVED***
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) ***REMOVED***
    this.init('popover', element, options)
  ***REMOVED***

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.2.0'

  Popover.DEFAULTS = $.extend(***REMOVED******REMOVED***, $.fn.tooltip.Constructor.DEFAULTS, ***REMOVED***
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  ***REMOVED***)


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend(***REMOVED******REMOVED***, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () ***REMOVED***
    return Popover.DEFAULTS
  ***REMOVED***

  Popover.prototype.setContent = function () ***REMOVED***
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content').empty()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  ***REMOVED***

  Popover.prototype.hasContent = function () ***REMOVED***
    return this.getTitle() || this.getContent()
  ***REMOVED***

  Popover.prototype.getContent = function () ***REMOVED***
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  ***REMOVED***

  Popover.prototype.arrow = function () ***REMOVED***
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  ***REMOVED***

  Popover.prototype.tip = function () ***REMOVED***
    if (!this.$tip) this.$tip = $(this.options.template)
    return this.$tip
  ***REMOVED***


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) ***REMOVED***
    return this.each(function () ***REMOVED***
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && option == 'destroy') return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
***REMOVED***)
  ***REMOVED***

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () ***REMOVED***
    $.fn.popover = old
    return this
  ***REMOVED***

***REMOVED***(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.2.0
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) ***REMOVED***
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) ***REMOVED***
    var process  = $.proxy(this.process, this)

    this.$body          = $('body')
    this.$scrollElement = $(element).is('body') ? $(window) : $(element)
    this.options        = $.extend(***REMOVED******REMOVED***, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', process)
    this.refresh()
    this.process()
  ***REMOVED***

  ScrollSpy.VERSION  = '3.2.0'

  ScrollSpy.DEFAULTS = ***REMOVED***
    offset: 10
  ***REMOVED***

  ScrollSpy.prototype.getScrollHeight = function () ***REMOVED***
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  ***REMOVED***

  ScrollSpy.prototype.refresh = function () ***REMOVED***
    var offsetMethod = 'offset'
    var offsetBase   = 0

    if (!$.isWindow(this.$scrollElement[0])) ***REMOVED***
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
***REMOVED***

    this.offsets = []
    this.targets = []
    this.scrollHeight = this.getScrollHeight()

    var self     = this

    this.$body
      .find(this.selector)
      .map(function () ***REMOVED***
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
  ***REMOVED***)
      .sort(function (a, b) ***REMOVED*** return a[0] - b[0] ***REMOVED***)
      .each(function () ***REMOVED***
        self.offsets.push(this[0])
        self.targets.push(this[1])
  ***REMOVED***)
  ***REMOVED***

  ScrollSpy.prototype.process = function () ***REMOVED***
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) ***REMOVED***
      this.refresh()
***REMOVED***

    if (scrollTop >= maxScroll) ***REMOVED***
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
***REMOVED***

    if (activeTarget && scrollTop <= offsets[0]) ***REMOVED***
      return activeTarget != (i = targets[0]) && this.activate(i)
***REMOVED***

    for (i = offsets.length; i--;) ***REMOVED***
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
        && this.activate(targets[i])
***REMOVED***
  ***REMOVED***

  ScrollSpy.prototype.activate = function (target) ***REMOVED***
    this.activeTarget = target

    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')

    var selector = this.selector +
        '[data-target="' + target + '"],' +
        this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) ***REMOVED***
      active = active
        .closest('li.dropdown')
        .addClass('active')
***REMOVED***

    active.trigger('activate.bs.scrollspy')
  ***REMOVED***


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) ***REMOVED***
    return this.each(function () ***REMOVED***
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
***REMOVED***)
  ***REMOVED***

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () ***REMOVED***
    $.fn.scrollspy = old
    return this
  ***REMOVED***


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () ***REMOVED***
    $('[data-spy="scroll"]').each(function () ***REMOVED***
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
***REMOVED***)
  ***REMOVED***)

***REMOVED***(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.2.0
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) ***REMOVED***
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) ***REMOVED***
    this.element = $(element)
  ***REMOVED***

  Tab.VERSION = '3.2.0'

  Tab.prototype.show = function () ***REMOVED***
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) ***REMOVED***
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
***REMOVED***

    if ($this.parent('li').hasClass('active')) return

    var previous = $ul.find('.active:last a')[0]
    var e        = $.Event('show.bs.tab', ***REMOVED***
      relatedTarget: previous
***REMOVED***)

    $this.trigger(e)

    if (e.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () ***REMOVED***
      $this.trigger(***REMOVED***
        type: 'shown.bs.tab',
        relatedTarget: previous
  ***REMOVED***)
***REMOVED***)
  ***REMOVED***

  Tab.prototype.activate = function (element, container, callback) ***REMOVED***
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && $active.hasClass('fade')

    function next() ***REMOVED***
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
        .removeClass('active')

      element.addClass('active')

      if (transition) ***REMOVED***
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
  ***REMOVED*** else ***REMOVED***
        element.removeClass('fade')
  ***REMOVED***

      if (element.parent('.dropdown-menu')) ***REMOVED***
        element.closest('li.dropdown').addClass('active')
  ***REMOVED***

      callback && callback()
***REMOVED***

    transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(150) :
      next()

    $active.removeClass('in')
  ***REMOVED***


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) ***REMOVED***
    return this.each(function () ***REMOVED***
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
***REMOVED***)
  ***REMOVED***

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () ***REMOVED***
    $.fn.tab = old
    return this
  ***REMOVED***


  // TAB DATA-API
  // ============

  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) ***REMOVED***
    e.preventDefault()
    Plugin.call($(this), 'show')
  ***REMOVED***)

***REMOVED***(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.2.0
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) ***REMOVED***
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) ***REMOVED***
    this.options = $.extend(***REMOVED******REMOVED***, Affix.DEFAULTS, options)

    this.$target = $(this.options.target)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      =
    this.unpin        =
    this.pinnedOffset = null

    this.checkPosition()
  ***REMOVED***

  Affix.VERSION  = '3.2.0'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = ***REMOVED***
    offset: 0,
    target: window
  ***REMOVED***

  Affix.prototype.getPinnedOffset = function () ***REMOVED***
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  ***REMOVED***

  Affix.prototype.checkPositionWithEventLoop = function () ***REMOVED***
    setTimeout($.proxy(this.checkPosition, this), 1)
  ***REMOVED***

  Affix.prototype.checkPosition = function () ***REMOVED***
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.unpin   != null && (scrollTop + this.unpin <= position.top) ? false :
                offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' :
                offsetTop    != null && (scrollTop <= offsetTop) ? 'top' : false

    if (this.affixed === affix) return
    if (this.unpin != null) this.$element.css('top', '')

    var affixType = 'affix' + (affix ? '-' + affix : '')
    var e         = $.Event(affixType + '.bs.affix')

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    this.affixed = affix
    this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

    this.$element
      .removeClass(Affix.RESET)
      .addClass(affixType)
      .trigger($.Event(affixType.replace('affix', 'affixed')))

    if (affix == 'bottom') ***REMOVED***
      this.$element.offset(***REMOVED***
        top: scrollHeight - this.$element.height() - offsetBottom
  ***REMOVED***)
***REMOVED***
  ***REMOVED***


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) ***REMOVED***
    return this.each(function () ***REMOVED***
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
***REMOVED***)
  ***REMOVED***

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () ***REMOVED***
    $.fn.affix = old
    return this
  ***REMOVED***


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () ***REMOVED***
    $('[data-spy="affix"]').each(function () ***REMOVED***
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || ***REMOVED******REMOVED***

      if (data.offsetBottom) data.offset.bottom = data.offsetBottom
      if (data.offsetTop)    data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
***REMOVED***)
  ***REMOVED***)

***REMOVED***(jQuery);
