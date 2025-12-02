if (!Promise.myAll) {
  Promise.myAll = function (promises) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        return reject(new TypeError("Argument must be an array"));
      }

      const results = [];
      let completed = 0;
      const total = promises.length;

      // Edge case: empty array → resolve immediately
      if (total === 0) {
        return resolve([]);
      }

      promises.forEach((item, index) => {
        // Convert non-promises to promises
        Promise.resolve(item)
          .then(value => {
            results[index] = value;     // maintain order
            completed++;

            if (completed === total) {
              resolve(results);
            }
          })
          .catch(err => {
            reject(err); // reject immediately on first error
          });
      });
    });
  };
}
