function deepClone(obj, seen = new WeakMap()) {
  // Handle primitives (null, number, string, boolean, undefined, symbol, bigint)
  if (obj === null || typeof obj !== "object") return obj;

  // Handle circular references
  if (seen.has(obj)) return seen.get(obj);

  // Handle Date
  if (obj instanceof Date) return new Date(obj);

  // Handle RegExp
  if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags);

  // Initialize clone (Array or Object)
  const clone = Array.isArray(obj) ? [] : {};

  // Track reference
  seen.set(obj, clone);

  // Copy properties
  for (const key in obj) {
    clone[key] = deepClone(obj[key], seen);
  }

  return clone;
}
