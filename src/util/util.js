function CalculateOutput(val, eqs) {
  let temp = val;

  for (let i = 0; i < eqs.length; i++) {
    temp = exeEq(temp, eqs[i]);
  }

  return temp;
}

function exeEq(val, eq) {
  if (!eq.includes("x")) {
    return val;
  }

  let tempVal = val;
  let tempEq = eq;

  tempEq = tempEq.replace(/(\d)(x)/g, "$1*$2");
  tempEq = tempEq.replace(/\bx\b/gi, `(${tempVal})`);
  tempEq = tempEq.replace(/\^/g, "**");

  try {
    let result = eval(tempEq);
    return result;
  } catch (error) {
    console.error("Error in evaluating the equation:", error);
    return null;
  }
  return tempVal;
}

export default CalculateOutput;
