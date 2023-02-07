class PromiseHelper {
  handlePromise(promise: Promise<any>) {
    return promise
      .then(data => [data, undefined])
      .catch(error => Promise.resolve([undefined, error]));
  }
}

export default new PromiseHelper();
