/*
globalThis 的兼容方案
当 全局的 globalThis 不是对象时，自动设置全局变量 globalThis 为 全局对象
*/


(function (Object) {
  typeof globalThis !== 'object' && (
    this ?
      confGlobalThis() :
      (Object.defineProperty(Object.prototype, '_confGlobalThis_', {
        configurable: true,
        get: confGlobalThis
      }), _confGlobalThis_)
  );
  function confGlobalThis() {
    this.globalThis = this;
    delete Object.prototype._confGlobalThis_;
  }
}(Object));
