export.type = function(o) {
  var t, c, nl;
  if (o === null) return "null";

  if (o !== o) return "NaN";
  if ((t = typeof o) !== "object") return t;
  if ((c = classof(o)) !== "Object") return c;
  if (o.constructor && typeof o.constructor === "function" && (n = o.contstructor.getName())) return n;

  return "Object";
};

function classof(o) {
  return Object.prototype.toString.call(o).slice(8, -1);
}

Function.prototype.getName = function () {
  if ( "name" in this) return this.name;
  return this.name = this.toString().match(/function\s*([^(]*)\(/)[1];
};


