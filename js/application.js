/* Calculator Javascript
 */

// globals -----------------------------------------------

var limitedMathEval = math.eval;

// jQuery start ------------------------------------------

$(document).ready(function() {
  setupMathJs();

  // clear button setup
  $("#btn-clear").on("click", onClearExpression);

  // expression button setup
  $("#btn-0").on("click", null, "0", onExpressionButton);
  $("#btn-1").on("click", null, "1", onExpressionButton);
  $("#btn-2").on("click", null, "2", onExpressionButton);
  $("#btn-3").on("click", null, "3", onExpressionButton);
  $("#btn-4").on("click", null, "4", onExpressionButton);
  $("#btn-5").on("click", null, "5", onExpressionButton);
  $("#btn-6").on("click", null, "6", onExpressionButton);
  $("#btn-7").on("click", null, "7", onExpressionButton);
  $("#btn-8").on("click", null, "8", onExpressionButton);
  $("#btn-9").on("click", null, "9", onExpressionButton);

  $("#btn-point").on("click", null, ".", onExpressionButton);

  $("#btn-lparen").on("click", null, "(", onExpressionButton);
  $("#btn-rparen").on("click", null, ")", onExpressionButton);

  $("#btn-divide").on("click", null, "/", onExpressionButton);
  $("#btn-multiply").on("click", null, "*", onExpressionButton);
  $("#btn-minus").on("click", null, "-", onExpressionButton);
  $("#btn-plus").on("click", null, "+", onExpressionButton);

  // eval button setup
  $("#btn-equals").on("click", onEvaluateExpression);
});

function setupMathJs() {
  math.import({
    'import':     function () { throw new Error('Function import is disabled') },
    'createUnit': function () { throw new Error('Function createUnit is disabled') },
    'eval':       function () { throw new Error('Function eval is disabled') },
    'parse':      function () { throw new Error('Function parse is disabled') },
    'simplify':   function () { throw new Error('Function simplify is disabled') },
    'derivative': function () { throw new Error('Function derivative is disabled') }
  }, {override: true});
}

// events ------------------------------------------------

function onEvaluateExpression() {
  var expr = $("#calculator-input").val();

  try {
    var answer = limitedMathEval(expr);
    $("#calculator-input").val(answer);
  } catch (e) {
    console.log("Expression eval [" + expr + "] error: " + e.message);
    $("#calculator-input").val("").attr("placeholder", "ERROR");
  }
}

function onClearExpression() {
  $("#calculator-input").val("").attr("placeholder", "Enter an expression...");
}

function onExpressionButton(event) {
  var expr = $("#calculator-input").val();
  expr += event.data;
  $("#calculator-input").val(expr);
}
