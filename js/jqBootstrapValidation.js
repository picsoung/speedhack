/* jqBootstrapValidation
 * A plugin for automating validation on Twitter Bootstrap formatted forms.
 *
 * v1.3.6
 *
 * License: MIT <http://opensource.org/licenses/mit-license.php> - see LICENSE file
 *
 * http://ReactiveRaven.github.com/jqBootstrapValidation/
 */

(function( $ )***REMOVED***

	var createdElements = [];

	var defaults = ***REMOVED***
		options: ***REMOVED***
			prependExistingHelpBlock: false,
			sniffHtml: true, // sniff for 'required', 'maxlength', etc
			preventSubmit: true, // stop the form submit event from firing if validation fails
			submitError: false, // function called if there is an error when trying to submit
			submitSuccess: false, // function called just before a successful submit event is sent to the server
            semanticallyStrict: false, // set to true to tidy up generated HTML output
			autoAdd: ***REMOVED***
				helpBlocks: true
			***REMOVED***,
            filter: function () ***REMOVED***
                // return $(this).is(":visible"); // only validate elements you can see
                return true; // validate everything
    ***REMOVED***
		***REMOVED***,
    methods: ***REMOVED***
      init : function( options ) ***REMOVED***

        var settings = $.extend(true, ***REMOVED******REMOVED***, defaults);

        settings.options = $.extend(true, settings.options, options);

        var $siblingElements = this;

        var uniqueForms = $.unique(
          $siblingElements.map( function () ***REMOVED***
            return $(this).parents("form")[0];
  ***REMOVED***).toArray()
        );

        $(uniqueForms).bind("submit", function (e) ***REMOVED***
          var $form = $(this);
          var warningsFound = 0;
          var $inputs = $form.find("input,textarea,select").not("[type=submit],[type=image]").filter(settings.options.filter);
          $inputs.trigger("submit.validation").trigger("validationLostFocus.validation");

          $inputs.each(function (i, el) ***REMOVED***
            var $this = $(el),
              $controlGroup = $this.parents(".control-group").first();
            if (
              $controlGroup.hasClass("warning")
            ) ***REMOVED***
              $controlGroup.removeClass("warning").addClass("error");
              warningsFound++;
    ***REMOVED***
  ***REMOVED***);

          $inputs.trigger("validationLostFocus.validation");

          if (warningsFound) ***REMOVED***
            if (settings.options.preventSubmit) ***REMOVED***
              e.preventDefault();
    ***REMOVED***
            $form.addClass("error");
            if ($.isFunction(settings.options.submitError)) ***REMOVED***
              settings.options.submitError($form, e, $inputs.jqBootstrapValidation("collectErrors", true));
    ***REMOVED***
  ***REMOVED*** else ***REMOVED***
            $form.removeClass("error");
            if ($.isFunction(settings.options.submitSuccess)) ***REMOVED***
              settings.options.submitSuccess($form, e);
    ***REMOVED***
  ***REMOVED***
***REMOVED***);

        return this.each(function()***REMOVED***

          // Get references to everything we're interested in
          var $this = $(this),
            $controlGroup = $this.parents(".control-group").first(),
            $helpBlock = $controlGroup.find(".help-block").first(),
            $form = $this.parents("form").first(),
            validatorNames = [];

          // create message container if not exists
          if (!$helpBlock.length && settings.options.autoAdd && settings.options.autoAdd.helpBlocks) ***REMOVED***
              $helpBlock = $('<div class="help-block" />');
              $controlGroup.find('.controls').append($helpBlock);
							createdElements.push($helpBlock[0]);
  ***REMOVED***

          // =============================================================
          //                                     SNIFF HTML FOR VALIDATORS
          // =============================================================

          // *snort sniff snuffle*

          if (settings.options.sniffHtml) ***REMOVED***
            var message = "";
            // ---------------------------------------------------------
            //                                                   PATTERN
            // ---------------------------------------------------------
            if ($this.attr("pattern") !== undefined) ***REMOVED***
              message = "Not in the expected format<!-- data-validation-pattern-message to override -->";
              if ($this.data("validationPatternMessage")) ***REMOVED***
                message = $this.data("validationPatternMessage");
      ***REMOVED***
              $this.data("validationPatternMessage", message);
              $this.data("validationPatternRegex", $this.attr("pattern"));
    ***REMOVED***
            // ---------------------------------------------------------
            //                                                       MAX
            // ---------------------------------------------------------
            if ($this.attr("max") !== undefined || $this.attr("aria-valuemax") !== undefined) ***REMOVED***
              var max = ($this.attr("max") !== undefined ? $this.attr("max") : $this.attr("aria-valuemax"));
              message = "Too high: Maximum of '" + max + "'<!-- data-validation-max-message to override -->";
              if ($this.data("validationMaxMessage")) ***REMOVED***
                message = $this.data("validationMaxMessage");
      ***REMOVED***
              $this.data("validationMaxMessage", message);
              $this.data("validationMaxMax", max);
    ***REMOVED***
            // ---------------------------------------------------------
            //                                                       MIN
            // ---------------------------------------------------------
            if ($this.attr("min") !== undefined || $this.attr("aria-valuemin") !== undefined) ***REMOVED***
              var min = ($this.attr("min") !== undefined ? $this.attr("min") : $this.attr("aria-valuemin"));
              message = "Too low: Minimum of '" + min + "'<!-- data-validation-min-message to override -->";
              if ($this.data("validationMinMessage")) ***REMOVED***
                message = $this.data("validationMinMessage");
      ***REMOVED***
              $this.data("validationMinMessage", message);
              $this.data("validationMinMin", min);
    ***REMOVED***
            // ---------------------------------------------------------
            //                                                 MAXLENGTH
            // ---------------------------------------------------------
            if ($this.attr("maxlength") !== undefined) ***REMOVED***
              message = "Too long: Maximum of '" + $this.attr("maxlength") + "' characters<!-- data-validation-maxlength-message to override -->";
              if ($this.data("validationMaxlengthMessage")) ***REMOVED***
                message = $this.data("validationMaxlengthMessage");
      ***REMOVED***
              $this.data("validationMaxlengthMessage", message);
              $this.data("validationMaxlengthMaxlength", $this.attr("maxlength"));
    ***REMOVED***
            // ---------------------------------------------------------
            //                                                 MINLENGTH
            // ---------------------------------------------------------
            if ($this.attr("minlength") !== undefined) ***REMOVED***
              message = "Too short: Minimum of '" + $this.attr("minlength") + "' characters<!-- data-validation-minlength-message to override -->";
              if ($this.data("validationMinlengthMessage")) ***REMOVED***
                message = $this.data("validationMinlengthMessage");
      ***REMOVED***
              $this.data("validationMinlengthMessage", message);
              $this.data("validationMinlengthMinlength", $this.attr("minlength"));
    ***REMOVED***
            // ---------------------------------------------------------
            //                                                  REQUIRED
            // ---------------------------------------------------------
            if ($this.attr("required") !== undefined || $this.attr("aria-required") !== undefined) ***REMOVED***
              message = settings.builtInValidators.required.message;
              if ($this.data("validationRequiredMessage")) ***REMOVED***
                message = $this.data("validationRequiredMessage");
      ***REMOVED***
              $this.data("validationRequiredMessage", message);
    ***REMOVED***
            // ---------------------------------------------------------
            //                                                    NUMBER
            // ---------------------------------------------------------
            if ($this.attr("type") !== undefined && $this.attr("type").toLowerCase() === "number") ***REMOVED***
              message = settings.builtInValidators.number.message;
              if ($this.data("validationNumberMessage")) ***REMOVED***
                message = $this.data("validationNumberMessage");
      ***REMOVED***
              $this.data("validationNumberMessage", message);
    ***REMOVED***
            // ---------------------------------------------------------
            //                                                     EMAIL
            // ---------------------------------------------------------
            if ($this.attr("type") !== undefined && $this.attr("type").toLowerCase() === "email") ***REMOVED***
              message = "Not a valid email address<!-- data-validator-validemail-message to override -->";
              if ($this.data("validationValidemailMessage")) ***REMOVED***
                message = $this.data("validationValidemailMessage");
      ***REMOVED*** else if ($this.data("validationEmailMessage")) ***REMOVED***
                message = $this.data("validationEmailMessage");
      ***REMOVED***
              $this.data("validationValidemailMessage", message);
    ***REMOVED***
            // ---------------------------------------------------------
            //                                                MINCHECKED
            // ---------------------------------------------------------
            if ($this.attr("minchecked") !== undefined) ***REMOVED***
              message = "Not enough options checked; Minimum of '" + $this.attr("minchecked") + "' required<!-- data-validation-minchecked-message to override -->";
              if ($this.data("validationMincheckedMessage")) ***REMOVED***
                message = $this.data("validationMincheckedMessage");
      ***REMOVED***
              $this.data("validationMincheckedMessage", message);
              $this.data("validationMincheckedMinchecked", $this.attr("minchecked"));
    ***REMOVED***
            // ---------------------------------------------------------
            //                                                MAXCHECKED
            // ---------------------------------------------------------
            if ($this.attr("maxchecked") !== undefined) ***REMOVED***
              message = "Too many options checked; Maximum of '" + $this.attr("maxchecked") + "' required<!-- data-validation-maxchecked-message to override -->";
              if ($this.data("validationMaxcheckedMessage")) ***REMOVED***
                message = $this.data("validationMaxcheckedMessage");
      ***REMOVED***
              $this.data("validationMaxcheckedMessage", message);
              $this.data("validationMaxcheckedMaxchecked", $this.attr("maxchecked"));
    ***REMOVED***
  ***REMOVED***

          // =============================================================
          //                                       COLLECT VALIDATOR NAMES
          // =============================================================

          // Get named validators
          if ($this.data("validation") !== undefined) ***REMOVED***
            validatorNames = $this.data("validation").split(",");
  ***REMOVED***

          // Get extra ones defined on the element's data attributes
          $.each($this.data(), function (i, el) ***REMOVED***
            var parts = i.replace(/([A-Z])/g, ",$1").split(",");
            if (parts[0] === "validation" && parts[1]) ***REMOVED***
              validatorNames.push(parts[1]);
    ***REMOVED***
  ***REMOVED***);

          // =============================================================
          //                                     NORMALISE VALIDATOR NAMES
          // =============================================================

          var validatorNamesToInspect = validatorNames;
          var newValidatorNamesToInspect = [];

          do // repeatedly expand 'shortcut' validators into their real validators
          ***REMOVED***
            // Uppercase only the first letter of each name
            $.each(validatorNames, function (i, el) ***REMOVED***
              validatorNames[i] = formatValidatorName(el);
    ***REMOVED***);

            // Remove duplicate validator names
            validatorNames = $.unique(validatorNames);

            // Pull out the new validator names from each shortcut
            newValidatorNamesToInspect = [];
            $.each(validatorNamesToInspect, function(i, el) ***REMOVED***
              if ($this.data("validation" + el + "Shortcut") !== undefined) ***REMOVED***
                // Are these custom validators?
                // Pull them out!
                $.each($this.data("validation" + el + "Shortcut").split(","), function(i2, el2) ***REMOVED***
                  newValidatorNamesToInspect.push(el2);
        ***REMOVED***);
      ***REMOVED*** else if (settings.builtInValidators[el.toLowerCase()]) ***REMOVED***
                // Is this a recognised built-in?
                // Pull it out!
                var validator = settings.builtInValidators[el.toLowerCase()];
                if (validator.type.toLowerCase() === "shortcut") ***REMOVED***
                  $.each(validator.shortcut.split(","), function (i, el) ***REMOVED***
                    el = formatValidatorName(el);
                    newValidatorNamesToInspect.push(el);
                    validatorNames.push(el);
          ***REMOVED***);
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***);

            validatorNamesToInspect = newValidatorNamesToInspect;

  ***REMOVED*** while (validatorNamesToInspect.length > 0)

          // =============================================================
          //                                       SET UP VALIDATOR ARRAYS
          // =============================================================

          var validators = ***REMOVED******REMOVED***;

          $.each(validatorNames, function (i, el) ***REMOVED***
            // Set up the 'override' message
            var message = $this.data("validation" + el + "Message");
            var hasOverrideMessage = (message !== undefined);
            var foundValidator = false;
            message =
              (
                message
                  ? message
                  : "'" + el + "' validation failed <!-- Add attribute 'data-validation-" + el.toLowerCase() + "-message' to input to change this message -->"
              )
            ;

            $.each(
              settings.validatorTypes,
              function (validatorType, validatorTemplate) ***REMOVED***
                if (validators[validatorType] === undefined) ***REMOVED***
                  validators[validatorType] = [];
        ***REMOVED***
                if (!foundValidator && $this.data("validation" + el + formatValidatorName(validatorTemplate.name)) !== undefined) ***REMOVED***
                  validators[validatorType].push(
                    $.extend(
                      true,
                      ***REMOVED***
                        name: formatValidatorName(validatorTemplate.name),
                        message: message
              ***REMOVED***,
                      validatorTemplate.init($this, el)
                    )
                  );
                  foundValidator = true;
        ***REMOVED***
      ***REMOVED***
            );

            if (!foundValidator && settings.builtInValidators[el.toLowerCase()]) ***REMOVED***

              var validator = $.extend(true, ***REMOVED******REMOVED***, settings.builtInValidators[el.toLowerCase()]);
              if (hasOverrideMessage) ***REMOVED***
                validator.message = message;
      ***REMOVED***
              var validatorType = validator.type.toLowerCase();

              if (validatorType === "shortcut") ***REMOVED***
                foundValidator = true;
      ***REMOVED*** else ***REMOVED***
                $.each(
                  settings.validatorTypes,
                  function (validatorTemplateType, validatorTemplate) ***REMOVED***
                    if (validators[validatorTemplateType] === undefined) ***REMOVED***
                      validators[validatorTemplateType] = [];
            ***REMOVED***
                    if (!foundValidator && validatorType === validatorTemplateType.toLowerCase()) ***REMOVED***
                      $this.data("validation" + el + formatValidatorName(validatorTemplate.name), validator[validatorTemplate.name.toLowerCase()]);
                      validators[validatorType].push(
                        $.extend(
                          validator,
                          validatorTemplate.init($this, el)
                        )
                      );
                      foundValidator = true;
            ***REMOVED***
          ***REMOVED***
                );
      ***REMOVED***
    ***REMOVED***

            if (! foundValidator) ***REMOVED***
              $.error("Cannot find validation info for '" + el + "'");
    ***REMOVED***
  ***REMOVED***);

          // =============================================================
          //                                         STORE FALLBACK VALUES
          // =============================================================

          $helpBlock.data(
            "original-contents",
            (
              $helpBlock.data("original-contents")
                ? $helpBlock.data("original-contents")
                : $helpBlock.html()
            )
          );

          $helpBlock.data(
            "original-role",
            (
              $helpBlock.data("original-role")
                ? $helpBlock.data("original-role")
                : $helpBlock.attr("role")
            )
          );

          $controlGroup.data(
            "original-classes",
            (
              $controlGroup.data("original-clases")
                ? $controlGroup.data("original-classes")
                : $controlGroup.attr("class")
            )
          );

          $this.data(
            "original-aria-invalid",
            (
              $this.data("original-aria-invalid")
                ? $this.data("original-aria-invalid")
                : $this.attr("aria-invalid")
            )
          );

          // =============================================================
          //                                                    VALIDATION
          // =============================================================

          $this.bind(
            "validation.validation",
            function (event, params) ***REMOVED***

              var value = getValue($this);

              // Get a list of the errors to apply
              var errorsFound = [];

              $.each(validators, function (validatorType, validatorTypeArray) ***REMOVED***
                if (value || value.length || (params && params.includeEmpty) || (!!settings.validatorTypes[validatorType].blockSubmit && params && !!params.submitting)) ***REMOVED***
                  $.each(validatorTypeArray, function (i, validator) ***REMOVED***
                    if (settings.validatorTypes[validatorType].validate($this, value, validator)) ***REMOVED***
                      errorsFound.push(validator.message);
            ***REMOVED***
          ***REMOVED***);
        ***REMOVED***
      ***REMOVED***);

              return errorsFound;
    ***REMOVED***
          );

          $this.bind(
            "getValidators.validation",
            function () ***REMOVED***
              return validators;
    ***REMOVED***
          );

          // =============================================================
          //                                             WATCH FOR CHANGES
          // =============================================================
          $this.bind(
            "submit.validation",
            function () ***REMOVED***
              return $this.triggerHandler("change.validation", ***REMOVED***submitting: true***REMOVED***);
    ***REMOVED***
          );
          $this.bind(
            [
              "keyup",
              "focus",
              "blur",
              "click",
              "keydown",
              "keypress",
              "change"
            ].join(".validation ") + ".validation",
            function (e, params) ***REMOVED***

              var value = getValue($this);

              var errorsFound = [];

              $controlGroup.find("input,textarea,select").each(function (i, el) ***REMOVED***
                var oldCount = errorsFound.length;
                $.each($(el).triggerHandler("validation.validation", params), function (j, message) ***REMOVED***
                  errorsFound.push(message);
        ***REMOVED***);
                if (errorsFound.length > oldCount) ***REMOVED***
                  $(el).attr("aria-invalid", "true");
        ***REMOVED*** else ***REMOVED***
                  var original = $this.data("original-aria-invalid");
                  $(el).attr("aria-invalid", (original !== undefined ? original : false));
        ***REMOVED***
      ***REMOVED***);

              $form.find("input,select,textarea").not($this).not("[name=\"" + $this.attr("name") + "\"]").trigger("validationLostFocus.validation");

              errorsFound = $.unique(errorsFound.sort());

              // Were there any errors?
              if (errorsFound.length) ***REMOVED***
                // Better flag it up as a warning.
                $controlGroup.removeClass("success error").addClass("warning");

                // How many errors did we find?
                if (settings.options.semanticallyStrict && errorsFound.length === 1) ***REMOVED***
                  // Only one? Being strict? Just output it.
                  $helpBlock.html(errorsFound[0] + 
                    ( settings.options.prependExistingHelpBlock ? $helpBlock.data("original-contents") : "" ));
        ***REMOVED*** else ***REMOVED***
                  // Multiple? Being sloppy? Glue them together into an UL.
                  $helpBlock.html("<ul role=\"alert\"><li>" + errorsFound.join("</li><li>") + "</li></ul>" +
                    ( settings.options.prependExistingHelpBlock ? $helpBlock.data("original-contents") : "" ));
        ***REMOVED***
      ***REMOVED*** else ***REMOVED***
                $controlGroup.removeClass("warning error success");
                if (value.length > 0) ***REMOVED***
                  $controlGroup.addClass("success");
        ***REMOVED***
                $helpBlock.html($helpBlock.data("original-contents"));
      ***REMOVED***

              if (e.type === "blur") ***REMOVED***
                $controlGroup.removeClass("success");
      ***REMOVED***
    ***REMOVED***
          );
          $this.bind("validationLostFocus.validation", function () ***REMOVED***
            $controlGroup.removeClass("success");
  ***REMOVED***);
***REMOVED***);
  ***REMOVED***
      destroy : function( ) ***REMOVED***

        return this.each(
          function() ***REMOVED***

            var
              $this = $(this),
              $controlGroup = $this.parents(".control-group").first(),
              $helpBlock = $controlGroup.find(".help-block").first();

            // remove our events
            $this.unbind('.validation'); // events are namespaced.
            // reset help text
            $helpBlock.html($helpBlock.data("original-contents"));
            // reset classes
            $controlGroup.attr("class", $controlGroup.data("original-classes"));
            // reset aria
            $this.attr("aria-invalid", $this.data("original-aria-invalid"));
            // reset role
            $helpBlock.attr("role", $this.data("original-role"));
						// remove all elements we created
						if (createdElements.indexOf($helpBlock[0]) > -1) ***REMOVED***
							$helpBlock.remove();
						***REMOVED***

  ***REMOVED***
        );

  ***REMOVED***
      collectErrors : function(includeEmpty) ***REMOVED***

        var errorMessages = ***REMOVED******REMOVED***;
        this.each(function (i, el) ***REMOVED***
          var $el = $(el);
          var name = $el.attr("name");
          var errors = $el.triggerHandler("validation.validation", ***REMOVED***includeEmpty: true***REMOVED***);
          errorMessages[name] = $.extend(true, errors, errorMessages[name]);
***REMOVED***);

        $.each(errorMessages, function (i, el) ***REMOVED***
          if (el.length === 0) ***REMOVED***
            delete errorMessages[i];
  ***REMOVED***
***REMOVED***);

        return errorMessages;

  ***REMOVED***
      hasErrors: function() ***REMOVED***

        var errorMessages = [];

        this.each(function (i, el) ***REMOVED***
          errorMessages = errorMessages.concat(
            $(el).triggerHandler("getValidators.validation") ? $(el).triggerHandler("validation.validation", ***REMOVED***submitting: true***REMOVED***) : []
          );
***REMOVED***);

        return (errorMessages.length > 0);
  ***REMOVED***
      override : function (newDefaults) ***REMOVED***
        defaults = $.extend(true, defaults, newDefaults);
  ***REMOVED***
***REMOVED***
		validatorTypes: ***REMOVED***
      callback: ***REMOVED***
        name: "callback",
        init: function ($this, name) ***REMOVED***
          return ***REMOVED***
            validatorName: name,
            callback: $this.data("validation" + name + "Callback"),
            lastValue: $this.val(),
            lastValid: true,
            lastFinished: true
  ***REMOVED***;
***REMOVED***,
        validate: function ($this, value, validator) ***REMOVED***
          if (validator.lastValue === value && validator.lastFinished) ***REMOVED***
            return !validator.lastValid;
  ***REMOVED***

          if (validator.lastFinished === true)
          ***REMOVED***
            validator.lastValue = value;
            validator.lastValid = true;
            validator.lastFinished = false;

            var rrjqbvValidator = validator;
            var rrjqbvThis = $this;
            executeFunctionByName(
              validator.callback,
              window,
              $this,
              value,
              function (data) ***REMOVED***
                if (rrjqbvValidator.lastValue === data.value) ***REMOVED***
                  rrjqbvValidator.lastValid = data.valid;
                  if (data.message) ***REMOVED***
                    rrjqbvValidator.message = data.message;
          ***REMOVED***
                  rrjqbvValidator.lastFinished = true;
                  rrjqbvThis.data("validation" + rrjqbvValidator.validatorName + "Message", rrjqbvValidator.message);
                  // Timeout is set to avoid problems with the events being considered 'already fired'
                  setTimeout(function () ***REMOVED***
                    rrjqbvThis.trigger("change.validation");
          ***REMOVED***, 1); // doesn't need a long timeout, just long enough for the event bubble to burst
        ***REMOVED***
      ***REMOVED***
            );
  ***REMOVED***

          return false;

***REMOVED***
  ***REMOVED***
      ajax: ***REMOVED***
        name: "ajax",
        init: function ($this, name) ***REMOVED***
          return ***REMOVED***
            validatorName: name,
            url: $this.data("validation" + name + "Ajax"),
            lastValue: $this.val(),
            lastValid: true,
            lastFinished: true
  ***REMOVED***;
***REMOVED***,
        validate: function ($this, value, validator) ***REMOVED***
          if (""+validator.lastValue === ""+value && validator.lastFinished === true) ***REMOVED***
            return validator.lastValid === false;
  ***REMOVED***

          if (validator.lastFinished === true)
          ***REMOVED***
            validator.lastValue = value;
            validator.lastValid = true;
            validator.lastFinished = false;
            $.ajax(***REMOVED***
              url: validator.url,
              data: "value=" + value + "&field=" + $this.attr("name"),
              dataType: "json",
              success: function (data) ***REMOVED***
                if (""+validator.lastValue === ""+data.value) ***REMOVED***
                  validator.lastValid = !!(data.valid);
                  if (data.message) ***REMOVED***
                    validator.message = data.message;
          ***REMOVED***
                  validator.lastFinished = true;
                  $this.data("validation" + validator.validatorName + "Message", validator.message);
                  // Timeout is set to avoid problems with the events being considered 'already fired'
                  setTimeout(function () ***REMOVED***
                    $this.trigger("change.validation");
          ***REMOVED***, 1); // doesn't need a long timeout, just long enough for the event bubble to burst
        ***REMOVED***
      ***REMOVED***,
              failure: function () ***REMOVED***
                validator.lastValid = true;
                validator.message = "ajax call failed";
                validator.lastFinished = true;
                $this.data("validation" + validator.validatorName + "Message", validator.message);
                // Timeout is set to avoid problems with the events being considered 'already fired'
                setTimeout(function () ***REMOVED***
                  $this.trigger("change.validation");
        ***REMOVED***, 1); // doesn't need a long timeout, just long enough for the event bubble to burst
      ***REMOVED***
    ***REMOVED***);
  ***REMOVED***

          return false;

***REMOVED***
  ***REMOVED***
			regex: ***REMOVED***
				name: "regex",
				init: function ($this, name) ***REMOVED***
					return ***REMOVED***regex: regexFromString($this.data("validation" + name + "Regex"))***REMOVED***;
				***REMOVED***,
				validate: function ($this, value, validator) ***REMOVED***
					return (!validator.regex.test(value) && ! validator.negative)
						|| (validator.regex.test(value) && validator.negative);
				***REMOVED***
			***REMOVED***,
			required: ***REMOVED***
				name: "required",
				init: function ($this, name) ***REMOVED***
					return ***REMOVED******REMOVED***;
				***REMOVED***,
				validate: function ($this, value, validator) ***REMOVED***
					return !!(value.length === 0  && ! validator.negative)
						|| !!(value.length > 0 && validator.negative);
				***REMOVED***,
        blockSubmit: true
			***REMOVED***,
			match: ***REMOVED***
				name: "match",
				init: function ($this, name) ***REMOVED***
					var element = $this.parents("form").first().find("[name=\"" + $this.data("validation" + name + "Match") + "\"]").first();
					element.bind("validation.validation", function () ***REMOVED***
						$this.trigger("change.validation", ***REMOVED***submitting: true***REMOVED***);
					***REMOVED***);
					return ***REMOVED***"element": element***REMOVED***;
				***REMOVED***,
				validate: function ($this, value, validator) ***REMOVED***
					return (value !== validator.element.val() && ! validator.negative)
						|| (value === validator.element.val() && validator.negative);
				***REMOVED***,
        blockSubmit: true
			***REMOVED***,
			max: ***REMOVED***
				name: "max",
				init: function ($this, name) ***REMOVED***
					return ***REMOVED***max: $this.data("validation" + name + "Max")***REMOVED***;
				***REMOVED***,
				validate: function ($this, value, validator) ***REMOVED***
					return (parseFloat(value, 10) > parseFloat(validator.max, 10) && ! validator.negative)
						|| (parseFloat(value, 10) <= parseFloat(validator.max, 10) && validator.negative);
				***REMOVED***
			***REMOVED***,
			min: ***REMOVED***
				name: "min",
				init: function ($this, name) ***REMOVED***
					return ***REMOVED***min: $this.data("validation" + name + "Min")***REMOVED***;
				***REMOVED***,
				validate: function ($this, value, validator) ***REMOVED***
					return (parseFloat(value) < parseFloat(validator.min) && ! validator.negative)
						|| (parseFloat(value) >= parseFloat(validator.min) && validator.negative);
				***REMOVED***
			***REMOVED***,
			maxlength: ***REMOVED***
				name: "maxlength",
				init: function ($this, name) ***REMOVED***
					return ***REMOVED***maxlength: $this.data("validation" + name + "Maxlength")***REMOVED***;
				***REMOVED***,
				validate: function ($this, value, validator) ***REMOVED***
					return ((value.length > validator.maxlength) && ! validator.negative)
						|| ((value.length <= validator.maxlength) && validator.negative);
				***REMOVED***
			***REMOVED***,
			minlength: ***REMOVED***
				name: "minlength",
				init: function ($this, name) ***REMOVED***
					return ***REMOVED***minlength: $this.data("validation" + name + "Minlength")***REMOVED***;
				***REMOVED***,
				validate: function ($this, value, validator) ***REMOVED***
					return ((value.length < validator.minlength) && ! validator.negative)
						|| ((value.length >= validator.minlength) && validator.negative);
				***REMOVED***
			***REMOVED***,
			maxchecked: ***REMOVED***
				name: "maxchecked",
				init: function ($this, name) ***REMOVED***
					var elements = $this.parents("form").first().find("[name=\"" + $this.attr("name") + "\"]");
					elements.bind("click.validation", function () ***REMOVED***
						$this.trigger("change.validation", ***REMOVED***includeEmpty: true***REMOVED***);
					***REMOVED***);
					return ***REMOVED***maxchecked: $this.data("validation" + name + "Maxchecked"), elements: elements***REMOVED***;
				***REMOVED***,
				validate: function ($this, value, validator) ***REMOVED***
					return (validator.elements.filter(":checked").length > validator.maxchecked && ! validator.negative)
						|| (validator.elements.filter(":checked").length <= validator.maxchecked && validator.negative);
				***REMOVED***,
        blockSubmit: true
			***REMOVED***,
			minchecked: ***REMOVED***
				name: "minchecked",
				init: function ($this, name) ***REMOVED***
					var elements = $this.parents("form").first().find("[name=\"" + $this.attr("name") + "\"]");
					elements.bind("click.validation", function () ***REMOVED***
						$this.trigger("change.validation", ***REMOVED***includeEmpty: true***REMOVED***);
					***REMOVED***);
					return ***REMOVED***minchecked: $this.data("validation" + name + "Minchecked"), elements: elements***REMOVED***;
				***REMOVED***,
				validate: function ($this, value, validator) ***REMOVED***
					return (validator.elements.filter(":checked").length < validator.minchecked && ! validator.negative)
						|| (validator.elements.filter(":checked").length >= validator.minchecked && validator.negative);
				***REMOVED***,
        blockSubmit: true
			***REMOVED***
		***REMOVED***,
		builtInValidators: ***REMOVED***
			email: ***REMOVED***
				name: "Email",
				type: "shortcut",
				shortcut: "validemail"
			***REMOVED***,
			validemail: ***REMOVED***
				name: "Validemail",
				type: "regex",
				regex: "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\\.[A-Za-z]***REMOVED***2,4***REMOVED***",
				message: "Not a valid email address<!-- data-validator-validemail-message to override -->"
			***REMOVED***,
			passwordagain: ***REMOVED***
				name: "Passwordagain",
				type: "match",
				match: "password",
				message: "Does not match the given password<!-- data-validator-paswordagain-message to override -->"
			***REMOVED***,
			positive: ***REMOVED***
				name: "Positive",
				type: "shortcut",
				shortcut: "number,positivenumber"
			***REMOVED***,
			negative: ***REMOVED***
				name: "Negative",
				type: "shortcut",
				shortcut: "number,negativenumber"
			***REMOVED***,
			number: ***REMOVED***
				name: "Number",
				type: "regex",
				regex: "([+-]?\\\d+(\\\.\\\d*)?([eE][+-]?[0-9]+)?)?",
				message: "Must be a number<!-- data-validator-number-message to override -->"
			***REMOVED***,
			integer: ***REMOVED***
				name: "Integer",
				type: "regex",
				regex: "[+-]?\\\d+",
				message: "No decimal places allowed<!-- data-validator-integer-message to override -->"
			***REMOVED***,
			positivenumber: ***REMOVED***
				name: "Positivenumber",
				type: "min",
				min: 0,
				message: "Must be a positive number<!-- data-validator-positivenumber-message to override -->"
			***REMOVED***,
			negativenumber: ***REMOVED***
				name: "Negativenumber",
				type: "max",
				max: 0,
				message: "Must be a negative number<!-- data-validator-negativenumber-message to override -->"
			***REMOVED***,
			required: ***REMOVED***
				name: "Required",
				type: "required",
				message: "This is required<!-- data-validator-required-message to override -->"
			***REMOVED***,
			checkone: ***REMOVED***
				name: "Checkone",
				type: "minchecked",
				minchecked: 1,
				message: "Check at least one option<!-- data-validation-checkone-message to override -->"
			***REMOVED***
		***REMOVED***
	***REMOVED***;

	var formatValidatorName = function (name) ***REMOVED***
		return name
			.toLowerCase()
			.replace(
				/(^|\s)([a-z])/g ,
				function(m,p1,p2) ***REMOVED***
					return p1+p2.toUpperCase();
				***REMOVED***
			)
		;
	***REMOVED***;

	var getValue = function ($this) ***REMOVED***
		// Extract the value we're talking about
		var value = $this.val();
		var type = $this.attr("type");
		if (type === "checkbox") ***REMOVED***
			value = ($this.is(":checked") ? value : "");
		***REMOVED***
		if (type === "radio") ***REMOVED***
			value = ($('input[name="' + $this.attr("name") + '"]:checked').length > 0 ? value : "");
		***REMOVED***
		return value;
	***REMOVED***;

  function regexFromString(inputstring) ***REMOVED***
		return new RegExp("^" + inputstring + "$");
	***REMOVED***

  /**
   * Thanks to Jason Bunting via StackOverflow.com
   *
   * http://stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string#answer-359910
   * Short link: http://tinyurl.com/executeFunctionByName
  **/
  function executeFunctionByName(functionName, context /*, args*/) ***REMOVED***
    var args = Array.prototype.slice.call(arguments).splice(2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for(var i = 0; i < namespaces.length; i++) ***REMOVED***
      context = context[namespaces[i]];
***REMOVED***
    return context[func].apply(this, args);
  ***REMOVED***

	$.fn.jqBootstrapValidation = function( method ) ***REMOVED***

		if ( defaults.methods[method] ) ***REMOVED***
			return defaults.methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		***REMOVED*** else if ( typeof method === 'object' || ! method ) ***REMOVED***
			return defaults.methods.init.apply( this, arguments );
		***REMOVED*** else ***REMOVED***
		$.error( 'Method ' +  method + ' does not exist on jQuery.jqBootstrapValidation' );
			return null;
		***REMOVED***

	***REMOVED***;

  $.jqBootstrapValidation = function (options) ***REMOVED***
    $(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this,arguments);
  ***REMOVED***;

***REMOVED***)( jQuery );
