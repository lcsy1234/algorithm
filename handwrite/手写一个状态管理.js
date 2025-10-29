class Store {
  // 私有变量存储状态（外部无法直接修改）
  #state;
  // 构造函数：初始化状态
  constructor(initialState = {}) {
    // 深拷贝初始状态，避免外部引用污染
    this.#state = this.#deepClone(initialState);
  }
  // 静态方法：创建 Store 实例（工厂模式）
  static create(initialState) {
    return new Store(initialState);
  }

  // 获取当前状态（返回拷贝，防止外部直接修改原状态）
  getStore() {
    return this.#deepClone(this.#state);
  }

  // 触发状态更新（接收 action，格式为 { type, payload }）
  dispatch(action) {
    const { type, payload } = action;
    if (!type) {
      throw new Error('action 必须包含 type 属性');
    }

    // 根据 action.type 处理状态更新（这里简化为直接合并 payload）
    // 实际场景可扩展为更复杂的逻辑（如 switch 判断不同 type）
    this.#state = {
      ...this.#state,
      ...payload
    };
  }

  // 工具方法：深拷贝（简单实现，处理基本类型和对象）
  #deepClone(data) {
    if (typeof data !== 'object' || data === null) {
      return data;
    }
    return Array.isArray(data) 
      ? data.map(item => this.#deepClone(item)) 
      : Object.fromEntries(
          Object.entries(data).map(([key, value]) => [key, this.#deepClone(value)])
        );
  }
}